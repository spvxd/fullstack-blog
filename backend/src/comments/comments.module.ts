import {Module} from '@nestjs/common';
import {CommentsService} from './comments.service';
import {CommentsController} from './comments.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "../posts/entities/post.entity";
import {Comment} from "./entities/comment.entity";
import {PostsModule} from "../posts/posts.module";
import {LikesModule} from "../likes/likes.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Comment]), PostsModule
    ],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: [TypeOrmModule]
})
export class CommentsModule {
}
