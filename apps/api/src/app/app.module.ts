import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { CoreModule } from '@nestjs-api-test/core'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { BookmarkModule } from './bookmark/bookmark.module'
import { DatabaseConnectionService } from './database/database-connection.service'

@Module({
  imports: [
    CoreModule,
    AuthModule,
    UserModule,
    BookmarkModule,
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
