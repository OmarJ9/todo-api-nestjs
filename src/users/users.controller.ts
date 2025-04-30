import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UserDocument } from './entities/user.entity';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Role } from './role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
@Controller('users')
@UseGuards(AccessTokenGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  async getAllUsers(): Promise<UserDocument[]> {
    return await this.usersService.getAllUsers();
  }
}
