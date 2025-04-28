import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }

  async create(
    createUserDto: CreateUserDto,
    hashedPassword: string,
  ): Promise<UserDocument> {
    const user = new this.userModel({
      ...createUserDto,
      passwordHash: hashedPassword,
    });
    return user.save();
  }

  async setRefreshTokenHash(
    userId: string,
    refreshTokenHash: string | null,
  ): Promise<void> {
    await this.userModel.updateOne(
      { _id: userId },
      { $set: { refreshTokenHash } },
    );
  }
}
