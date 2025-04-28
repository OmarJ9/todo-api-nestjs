import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/auth/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/auth.interface';
import { UsersService } from './users.service';
import { UserDocument } from './schemas/user.schema';

@Controller('me')
@UseGuards(AccessTokenGuard)
export class MeController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async profile(@Req() req: RequestWithUser): Promise<UserDocument | null> {
    return await this.usersService.findById(req.user.userId);
  }
}
