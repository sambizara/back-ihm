// mouvements-stock.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Medicament } from '../../medicaments/entities/medicament.entity';

@Entity()
export class MouvementStock {
  @PrimaryGeneratedColumn()
  mouvement_id: number;

  @ManyToOne(() => Medicament, (medicament) => medicament.mouvements)
  medicament: Medicament;

  @Column()
  type_mouvement: string; // 'entrée' ou 'sortie'

  @Column()
  quantite: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_mouvement: Date;
}