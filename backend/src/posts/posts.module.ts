import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TagsModule} from "../tags/tags.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TagsModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [TypeOrmModule]
})
export class PostsModule {}
