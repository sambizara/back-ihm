// // filepath: c:\Users\sambi\projet-ihm\Backend-IHM\src\auth\auth.module.ts
// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';

// @Module({
//   imports: [
//     JwtModule.register({
//       secret: 'sambizara123', // Remplacez par une clé secrète sécurisée
//       signOptions: {
//         expiresIn: '1h', // Configurez la durée de validité du token
//       },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'sambizara123', // 🔐 mettre dans .env plus tard
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
