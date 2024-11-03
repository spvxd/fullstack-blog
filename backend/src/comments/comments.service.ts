import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Comment} from "./entities/comment.entity";
import {Repository} from "typeorm";
import {Post} from "../posts/entities/post.entity";
import {User} from "../user/entities/user.entity";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentsRepository: Repository<Comment>,
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) {
    }

    async create(createCommentDto: CreateCommentDto, postId: number, user: User) {
        console.log(postId)
        const post = await this.postRepository.findOne({where: {id: postId}})
        console.log(post)
        if (!post) {
            throw new NotFoundException(`Пост с id ${postId} не найден`);
        }
        const comment = this.commentsRepository.create({
            ...createCommentDto,
            author: user,
            post,
        });


        return await this.commentsRepository.save(comment);
    }

    async findPostWithComments(postId: number): Promise<Post> {
        return await this.postRepository.findOne({
            where: { id: postId },
            relations: ['comments', 'comments.author'],
            select: {

                comments: {
                    id: true,
                    text: true,
                    author: {
                        id: true,
                        username: true,
                        createdAt: true
                    },
                },
            },
        });
    }

}
