import { Module } from '@nestjs/common'
import { CoreModule } from '@nestjs-api-test/core'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { BookmarkModule } from './bookmark/bookmark.module'

@Module({
  imports: [CoreModule, AuthModule, UserModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  
}
