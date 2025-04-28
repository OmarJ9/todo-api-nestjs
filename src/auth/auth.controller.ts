import {
  Controller,
  Post,
  Body,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AccessTokenGuard } from './guards/jwt-auth.guard';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AuthTokens, RequestWithUser } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<AuthTokens> {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginUserDto): Promise<AuthTokens> {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logout(@Req() req: RequestWithUser) {
    await this.authService.logout(req.user.userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh-token')
  refreshToken(@Request() req: RequestWithUser): Promise<AuthTokens> {
    return this.authService.refreshToken(
      req.user.userId,
      req.user.refreshToken,
    );
  }
}
