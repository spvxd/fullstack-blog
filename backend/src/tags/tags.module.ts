import {Module} from '@nestjs/common';
import {TagsService} from './tags.service';
import {TagsController} from './tags.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Tag} from "./entities/tag.entity";
import {PostsModule} from "../posts/posts.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Tag]),
    ],
    controllers: [TagsController],
    providers: [TagsService],
    exports: [TypeOrmModule]
})
export class TagsModule {
}
