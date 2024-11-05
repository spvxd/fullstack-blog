import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Comment} from "./entities/comment.entity";
import {Repository} from "typeorm";
import {Post} from "../posts/entities/post.entity";
import {User} from "../user/entities/user.entity";
import {log} from "console";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentsRepository: Repository<Comment>,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) {
    }

    async create(text: string, postId: number, user: User, parentId?: number) {
        const post = await this.postRepository.findOne({where: {id: postId}})
        if (!post) {
            throw new NotFoundException(`Пост с id ${postId} не найден`);
        }
        let parentComment: Comment = null;
        if (parentId) {
            parentComment = await this.commentsRepository.findOne({where: {id: parentId}})
            if (!parentComment) {
                throw new NotFoundException(`Родительский комментарий с id=${parentId} не найден`)
            }
        }

        const comment = this.commentsRepository.create({
            text,
            author: user,
            post,
            parent: parentComment
        })
        // const comment = this.commentsRepository.create({
        //     ...createCommentDto,
        //     author: user,
        //     post,
        // });
        //
        //
        return await this.commentsRepository.save(comment);
    }

    // async findPostWithComments(postId: number): Promise<Post> {
    //     return this.postRepository.findOne({
    //         where: {post:{ id: postId}, parent: null},
    //         relations: ['comments', 'comments.author'],
    //         // select: {
    //         //
    //         //     comments: {
    //         //         id: true,
    //         //         text: true,
    //         //         author: {
    //         //             id: true,
    //         //             username: true,
    //         //             createdAt: true
    //         //         },
    //         //     },
    //         // },
    //     });
    // }
    async findPostWithComments(postId: number): Promise<Comment[]> {
        const comments = await this.commentsRepository.find({
            where: {post: {id: postId}},
            relations: ['author', 'parent'], // Добавляем 'parent' в relations
            order: {createdAt: 'ASC'},

        });

        const buildTree = (parentId: number | null): Comment[] => {
            return comments
                .filter(comment => (comment.parent ? comment.parent.id : null) === parentId)
                .map(comment => ({
                    ...comment,
                    children: buildTree(comment.id)
                }));
        };

        return buildTree(null);
    }

    async deleteComment(commentId: number, user: User) {
        const comment = await this.commentsRepository.findOne({where: {id: commentId}})
        if (!comment) {
            throw new NotFoundException(`Комментарий с id ${commentId} не найден`);
        }
        if (comment.author.id !== user.id) {
            throw new ForbiddenException('У вас нет прав на удаление этого комментария')
        }
        comment.text = 'Blank'
        await this.commentsRepository.save(comment)
        return comment
    }

}
