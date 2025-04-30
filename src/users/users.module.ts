import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSchema } from './entities/user.entity';
import { User } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MeController } from './me.controller';
import { UsersController } from './users.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController, MeController],
  exports: [UsersService],
})
export class UsersModule {}
