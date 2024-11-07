import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Post} from "../../posts/entities/post.entity";
import {Comment} from "../../comments/entities/comment.entity";
@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.likes, {onDelete: 'CASCADE'})
    user: User;

    @ManyToOne(() => Post, (post) => post.likes, {nullable: true, onDelete: 'CASCADE'})
    post: Post;

    @ManyToOne(() => Comment, (comment) => comment.likes, {
        nullable: true,
        onDelete: 'CASCADE'
    })
    comment: Comment;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}


