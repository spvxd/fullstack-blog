import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import {LikesService} from './likes.service';
import {CreateLikeDto} from './dto/create-like.dto';
import {UpdateLikeDto} from './dto/update-like.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {User} from "../user/entities/user.entity";

@Controller('likes')
@UseGuards(JwtAuthGuard)
export class LikesController {
    constructor(private readonly likesService: LikesService) {
    }

    @Post('post/:postId')
    async likePost(@Param('postId') postId: number, @Request() req: any) {
        const user = req.user
        return this.likesService.togglePostLike(postId, user);
    }


    @Post('comment/:commentId')
    async likeComment(@Param('commentId') commentId: number, @Request() req: any) {
        const user = req.user
        return this.likesService.toggleCommentLike(commentId, user);
    }


}
