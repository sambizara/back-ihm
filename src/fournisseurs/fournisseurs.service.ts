import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur } from './entities/fournisseur.entity';

@Injectable()
export class FournisseursService {
  constructor(
    @InjectRepository(Fournisseur)
    private fournisseurRepository: Repository<Fournisseur>,
  ) {}

  create(createFournisseurDto: CreateFournisseurDto) {
    return this.fournisseurRepository.save(createFournisseurDto);
  }

  findAll() {
    return this.fournisseurRepository.find();
  }

  findOne(id: number) {
    return this.fournisseurRepository.findOne({ where: { fournisseur_id: id } });
  }

  async update(id: number, updateFournisseurDto: UpdateFournisseurDto): Promise<Fournisseur | null> {
    await this.fournisseurRepository.update(id, updateFournisseurDto);
    return this.fournisseurRepository.findOne({ where: { fournisseur_id: id } });
  }

  remove(id: number) {
    return this.fournisseurRepository.delete(id);
  }
}
