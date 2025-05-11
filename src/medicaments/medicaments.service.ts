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

  async create(createMedicamentDto: CreateMedicamentDto) {
    // Correction : lier le fournisseur à l'objet, pas juste l'id
    const { fournisseur_id, ...rest } = createMedicamentDto;
    const med = this.medicamentRepository.create({
      ...rest,
      fournisseur: fournisseur_id
        ? { fournisseur_id: Number(fournisseur_id) }
        : undefined,
    });
    const saved = await this.medicamentRepository.save(med as any); // TypeORM bug: "as any" workaround
    // On retourne l'objet complet avec la relation fournisseur
    return this.medicamentRepository.findOne({
      where: { medicament_id: saved.medicament_id },
      relations: ['fournisseur'],
    });
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
    // Correction : gérer la relation fournisseur comme pour create
    const { fournisseur_id, ...rest } = updateMedicamentDto;
    const updatePayload: any = {
      ...rest,
      fournisseur: fournisseur_id
        ? { fournisseur_id: Number(fournisseur_id) }
        : undefined,
    };
    await this.medicamentRepository.update(id, updatePayload);
    // On retourne l'objet complet et à jour, avec la relation fournisseur
    return this.medicamentRepository.findOne({
      where: { medicament_id: id },
      relations: ['fournisseur'],
    });
  }

  remove(id: number) {
    return this.medicamentRepository.delete(id);
  }
}
