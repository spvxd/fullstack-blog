import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post])
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [TypeOrmModule]
})
export class PostsModule {}
