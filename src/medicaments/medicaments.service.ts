import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicament } from './entities/medicament.entity';
import { CreateMedicamentDto } from './dto/create-medicament.dto';
import { UpdateMedicamentDto } from './dto/update-medicament.dto';

@Injectable()
export class MedicamentsService {
  constructor(
    @InjectRepository(Medicament)
    private medicamentRepository: Repository<Medicament>,
  ) {}

  create(createMedicamentDto: CreateMedicamentDto) {
    return this.medicamentRepository.save(createMedicamentDto);
  }

  findAll() {
    return this.medicamentRepository.find({ relations: ['fournisseur'] });
  }

  findOne(id: number) {
    return this.medicamentRepository.findOne({
      where: { medicament_id: id },
      relations: ['fournisseur'],
    });
  }

  async update(id: number, updateMedicamentDto: UpdateMedicamentDto) {
    await this.medicamentRepository.update(id, updateMedicamentDto);
    // On retourne l'objet complet et à jour, avec les relations
    return this.medicamentRepository.findOne({
      where: { medicament_id: id },
      relations: ['fournisseur'],
    });
  }

  remove(id: number) {
    return this.medicamentRepository.delete(id);
  }
}