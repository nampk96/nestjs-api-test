import { Exclude, instanceToPlain } from 'class-transformer'
import { IsEmail } from 'class-validator'
import { BeforeInsert, Column, Entity } from 'typeorm'
import { AbstractEntity } from './abstract.entity'
import * as bcrypt from 'bcrypt'

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string

  @Column()
  @Exclude()
  password: string

  @Column({ default: '', nullable: true })
  firstName?: string | null

  @Column({ default: '', nullable: true })
  lastName?: string | null

  @BeforeInsert()
 async hashPassword () {
    this.password = await bcrypt.hash(this.password, 10)
 }

    toJSON() {
        return instanceToPlain(this)
    }
}
