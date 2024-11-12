import { User } from "src/user/entities/user.entity";
import {
    Column,
    CreateDateColumn,
    Entity, JoinTable, ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Comment } from '../../comments/entities/comment.entity';
import {Like} from "../../likes/entities/like.entity";
import {Tag} from "../../tags/entities/tag.entity";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({length: 255})
    title: string

    @Column('text')
    content: string

    @Column({default: false})
    isPublished: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date


    @ManyToOne(() => User, (user) => user.posts)
    author: User;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    @OneToMany(() => Like, (like) => like.post)
    likes: Like[]

    @ManyToMany(() => Tag, (tag) => tag.posts, { cascade: true })
    @JoinTable()
    tags: Tag[];

}
