import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany, IsNull} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';
import {Exclude} from "class-transformer";
import {Like} from "../../likes/entities/like.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.comments, { eager: true })
    author: User;

    @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
    post: Post;

    @ManyToOne(() => Comment, (comment) => comment.children, { nullable: true })
    parent: Comment;

    @OneToMany(() => Comment, (comment) => comment.parent)
    children: Comment[];

    @OneToMany(() => Like, (like) => like.comment)
    likes: Like[];
}
