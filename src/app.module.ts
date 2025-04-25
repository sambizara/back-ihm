import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicament } from './medicaments/entities/medicament.entity';
import { Fournisseur } from './fournisseurs/entities/fournisseur.entity';
import { MouvementStock } from './mouvementstocks/entities/mouvementstock.entity';
import { MedicamentsModule } from './medicaments/medicaments.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
import { MouvementstocksModule } from './mouvementstocks/mouvementstocks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'madarauchiwa',
      database: 'ihm',
      entities: [Medicament, Fournisseur, MouvementStock],
      synchronize: true, // à désactiver en production !
      logging: true,
    }),
    MedicamentsModule,
    FournisseursModule,
    MouvementstocksModule,
  ],
})
export class AppModule {}