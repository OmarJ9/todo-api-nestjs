import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  Param,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { RequestWithUser } from 'src/auth/auth.interface';
import { AccessTokenGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Delete } from '@nestjs/common';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(AccessTokenGuard)
  create(@Body() createTaskDto: CreateTaskDto, @Req() req: RequestWithUser) {
    return this.taskService.create(createTaskDto, req.user.userId);
  }

  // @Get()
  // @UseGuards(AccessTokenGuard)
  // findAll(@Req() req: RequestWithUser) {
  //   return this.taskService.findAll(req.user.userId);
  // }

  @Get()
  @UseGuards(AccessTokenGuard)
  findTaskByDate(@Req() req: RequestWithUser, @Body('date') date: string) {
    return this.taskService.findTaskByDate(req.user.userId, date);
  }

  @Put(':id')
  @UseGuards(AccessTokenGuard)
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    await this.taskService.update(id, updateTaskDto);
    return { message: 'Task updated successfully' };
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  async delete(@Param('id') id: string) {
    await this.taskService.delete(id);
    return { message: 'Task deleted successfully' };
  }
}
