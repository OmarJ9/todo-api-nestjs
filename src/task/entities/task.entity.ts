import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from 'mongodb';
export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, type: ObjectId, ref: 'User' })
  userId: ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ default: '' })
  note: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ default: 0 })
  colorIndex: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
