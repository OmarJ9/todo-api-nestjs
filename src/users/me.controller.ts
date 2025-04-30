import { Controller, Get, Put, Req, UseGuards, Body } from '@nestjs/common';
import { AccessTokenGuard } from 'src/auth/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/auth.interface';
import { UsersService } from './users.service';
import { UserDocument } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('me')
@UseGuards(AccessTokenGuard)
export class MeController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async profile(@Req() req: RequestWithUser): Promise<UserDocument | null> {
    return await this.usersService.findById(req.user.userId);
  }

  @Put()
  async update(
    @Req() req: RequestWithUser,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return await this.usersService.update(req.user.userId, updateUserDto);
  }
}
