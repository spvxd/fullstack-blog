import { Post } from "src/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from '../../comments/entities/comment.entity';
import {Exclude} from "class-transformer";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(()=> Post, (post) => post.author)
    posts: Post[]

    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[];


}
