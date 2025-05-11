// import { Controller, Post, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('register')
//   async register(@Body() body: { username: string; password: string }) {
//     const hashedPassword = await this.authService.hashPassword(body.password);

//     // TODO: Sauvegarder l'utilisateur dans la base de données ici
//     const user = { username: body.username, password: hashedPassword };
//     console.log('User saved:', user);

//     return { message: 'User registered successfully' };
//   }

//   @Post('login')
//   login(@Body() body: { username: string; password: string }) {
//     // TODO: Validez l'utilisateur dans la base de données
//     const isValid = true; // À remplacer par une vraie validation
//     if (!isValid) {
//       return { message: 'Invalid credentials' };
//     }

//     const token = this.authService.generateJwt({
//       username: body.username,
//     });

//     return { accessToken: token };
//   }
// }

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<{ access_token: string }> {
    return this.authService.login(body.email, body.password);
  }
}
