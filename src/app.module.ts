import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicament } from './medicaments/entities/medicament.entity';
import { Fournisseur } from './fournisseurs/entities/fournisseur.entity';
import { MouvementStock } from './mouvementstocks/entities/mouvementstock.entity';
import { MedicamentsModule } from './medicaments/medicaments.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { MouvementstocksModule } from './mouvementstocks/mouvementstocks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sambizara123',
      database: 'ihm',
      entities: [Medicament, Fournisseur, MouvementStock, User],
      synchronize: true,
      logging: true,
    }),
    MedicamentsModule,
    FournisseursModule,
    MouvementstocksModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
