import {Module} from '@nestjs/common';
import {LikesService} from './likes.service';
import {LikesController} from './likes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Like} from "./entities/like.entity";
import {PostsModule} from "../posts/posts.module";
import {CommentsModule} from "../comments/comments.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Like]), PostsModule, CommentsModule
    ],
    controllers: [LikesController],
    providers: [LikesService],
    exports: [TypeOrmModule]
})
export class LikesModule {
}
