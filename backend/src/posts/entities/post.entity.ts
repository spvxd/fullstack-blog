import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    


}
