import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMouvementstockDto } from './dto/create-mouvementstock.dto';
import { UpdateMouvementstockDto } from './dto/update-mouvementstock.dto';
import { MouvementStock } from './entities/mouvementstock.entity';
import { Medicament } from '../medicaments/entities/medicament.entity';

@Injectable()
export class MouvementstocksService {
  constructor(
    @InjectRepository(MouvementStock)
    private mouvementStockRepository: Repository<MouvementStock>,
    @InjectRepository(Medicament)
    private medicamentRepository: Repository<Medicament>,
  ) {}

  async create(createMouvementstockDto: CreateMouvementstockDto) {
    const medicament = await this.medicamentRepository.findOne({ where: { medicament_id: createMouvementstockDto.medicament_id } });
    if (!medicament) throw new Error('Medicament not found');
    // Gestion du stock
    if (createMouvementstockDto.type_mouvement === 'entrée') {
      medicament.stock = (medicament.stock || 0) + createMouvementstockDto.quantite;
    } else if (createMouvementstockDto.type_mouvement === 'sortie') {
      medicament.stock = Math.max((medicament.stock || 0) - createMouvementstockDto.quantite, 0);
    }
    await this.medicamentRepository.save(medicament);
    const mouvement = this.mouvementStockRepository.create({
      ...createMouvementstockDto,
      medicament
    });
    return this.mouvementStockRepository.save(mouvement);
  }

  findAll() {
    return this.mouvementStockRepository.find({ relations: ['medicament'] });
  }

  findOne(id: number) {
    return this.mouvementStockRepository.findOne({ where: { mouvement_id: id }, relations: ['medicament'] });
  }

  update(id: number, updateMouvementstockDto: UpdateMouvementstockDto) {
    return this.mouvementStockRepository.update(id, updateMouvementstockDto);
  }

  remove(id: number) {
    return this.mouvementStockRepository.delete(id);
  }
}
