import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) { }

  async create(createPostDto: CreatePostDto, user: User): Promise<Post> {
    console.log(user)
    return this.postRepository.save({...createPostDto, author: user})
  }

  async findAll() {
    return this.postRepository.find({relations: ['author'], select: {author: {username: true}}})
  
  }

  async findOne(id: number) { 
    const post = await this.postRepository.findOne({relations: ['author'], select: {author: {username: true}}, where: {id}})
    if(!post) throw new NotFoundException('Пост не найден!')
    return post
  }

  async update(id: number, updatePostDto: UpdatePostDto, user: User) {
    const post = await this.postRepository.findOne({relations: ['author'], select: {author: {username: true, id: true}}, where: {id}})
    if(!post) throw new NotFoundException('Пост не найден!')
    if(post.author.id !== user.id) {
      throw new ForbiddenException('У вас нет прав редактировать этот пост')
    }
    Object.assign(post, updatePostDto)
    await this.postRepository.save(post)
    return post
  }

  async remove(id: number, user: User) {
    const post = await this.postRepository.findOne({relations: ['author'], select: {author: {username: true, id: true}}, where: {id}})
    if(!post) throw new NotFoundException('Пост не найден!')
    if(post.author.id !== user.id) {
      throw new ForbiddenException('У вас нет прав удалять этот пост')
    }
     return this.postRepository.delete(id);
  }
}
