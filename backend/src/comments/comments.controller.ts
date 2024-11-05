import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Request,
    UseInterceptors,
    ClassSerializerInterceptor
} from '@nestjs/common';
import {CommentsService} from './comments.service';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('posts/:postId/comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createCommentDto: CreateCommentDto, @Param('postId') postId: string, @Request() req: any) {
        const user = req.user
        const {text, parentId} = createCommentDto;
        return this.commentsService.create(text, +postId, user, +parentId);
    }


    @Get()
    showComments(@Param('postId') postId: string) {
        return this.commentsService.findPostWithComments(+postId);
    }
    @Delete(':commentId')
    @UseGuards(JwtAuthGuard)
    delete(@Param('commentId') commentId: string, @Request() req: any) {
        const user = req.user
        return this.commentsService.deleteComment(+commentId, user);
    }

}
