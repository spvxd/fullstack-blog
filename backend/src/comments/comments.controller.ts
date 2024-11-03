import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@Controller('posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCommentDto: CreateCommentDto,  @Param('postId') postId: string, @Request() req: any,) {
    const user = req.user;
    return this.commentsService.create(createCommentDto, +postId, user);
  }


  @Get()
  findOne(@Param('postId') postId: string) {
    return this.commentsService.findPostWithComments(+postId);
  }

}
