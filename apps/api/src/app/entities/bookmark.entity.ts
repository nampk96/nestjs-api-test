import { Column, Entity, } from "typeorm";
import { AbstractEntity } from "./abstract.entity";

@Entity('bookmarks')
export class BookmarkEntity extends AbstractEntity {
    @Column()
    title: string

    @Column({
        default: null, nullable: true
    })
    description?: string | null

    @Column()
    link: string
}