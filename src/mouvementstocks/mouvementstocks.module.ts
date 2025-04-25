import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MouvementstocksService } from './mouvementstocks.service';
import { MouvementstocksController } from './mouvementstocks.controller';
import { MouvementStock } from './entities/mouvementstock.entity';
import { Medicament } from '../medicaments/entities/medicament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MouvementStock, Medicament])],
  controllers: [MouvementstocksController],
  providers: [MouvementstocksService],
})
export class MouvementstocksModule {}
