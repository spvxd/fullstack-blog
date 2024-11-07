// likes.service.ts
import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Like} from "./entities/like.entity";
import {Post} from '../posts/entities/post.entity'
import { Comment } from '../comments/entities/comment.entity'
import { User } from '../user/entities/user.entity'

@Injectable()
export class LikesService {
  constructor(
      @InjectRepository(Like) private likesRepository: Repository<Like>,
      @InjectRepository(Post) private postsRepository: Repository<Post>,
      @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
  ) {}

  async togglePostLike(postId: number, user: User): Promise<string> {
    const post = await this.postsRepository.findOne({ where: { id: postId } });
    if (!post) {
      throw new NotFoundException(`Post with ID ${postId} not found`);
    }

    const existingLike = await this.likesRepository.findOne({
      where: { post: { id: postId }, user: { id: user.id } },
    });

    if (existingLike) {
      await this.likesRepository.remove(existingLike);
      return 'Like removed successfully';
    } else {
      // Если лайк не существует, создаем его
      const like = this.likesRepository.create({ post, user });
      await this.likesRepository.save(like);
      return 'Post liked successfully';
    }
  }

  async toggleCommentLike(commentId: number, user: User): Promise<string> {
    const comment = await this.commentsRepository.findOne({ where: { id: commentId } });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${commentId} not found`);
    }

    const existingLike = await this.likesRepository.findOne({
      where: { comment: { id: commentId }, user: { id: user.id } },
    });

    if (existingLike) {
      await this.likesRepository.remove(existingLike);
      return 'Like removed successfully';
    } else {
      const like = this.likesRepository.create({ comment, user });
      await this.likesRepository.save(like);
      return 'Comment liked successfully';
    }
  }


}
