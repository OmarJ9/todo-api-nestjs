import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop()
  refreshTokenHash: string;

  @Prop({ type: [String], default: [Role.USER] })
  roles: Role[];

  @Prop({ type: Number, default: 0, min: 0, max: 10 })
  avatarIndex: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
