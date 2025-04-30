import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './entities/task.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateTaskDto } from './dto/update-task.dto';
@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto, userId: string) {
    const task = new this.taskModel({ ...createTaskDto, userId });
    return task.save();
  }

  async findAll(userId: string) {
    return this.taskModel.find({ userId });
  }

  async findTaskByDate(userId: string, date: string) {
    return this.taskModel.find({ userId, date });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    await task.updateOne(updateTaskDto);
  }

  async delete(id: string) {
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    await task.deleteOne();
  }
}
