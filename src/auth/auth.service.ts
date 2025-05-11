// import { Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//   constructor(private readonly jwtService: JwtService) {}

//   async hashPassword(password: string): Promise<string> {
//     try {
//       return await bcrypt.hash(password, 10);
//     } catch {
//       throw new Error('Error hashing password');
//     }
//   }

//   async validatePassword(
//     password: string,
//     hashedPassword: string,
//   ): Promise<boolean> {
//     try {
//       return await bcrypt.compare(password, hashedPassword);
//     } catch {
//       throw new Error('Error validating password');
//     }
//   }

//   generateJwt(payload: Record<string, any>): string {
//     return this.jwtService.sign(payload);
//   }
// }

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email invalide');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Mot de passe incorrect');
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}
