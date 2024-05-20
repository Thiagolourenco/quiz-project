import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() data: { email: string; password: string }) {
    const userData = await this.authService.signIn(data.email, data.password);

    // if(userData) {
    //   const apiKey = await this.accountService.getKey()

    //   console.log("API KEY", apiKey)
    //   request["teste"] = apiKey
    // }
    return userData;
  }
}
