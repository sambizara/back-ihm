import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Fournisseur } from '../../fournisseurs/entities/fournisseur.entity';
import { MouvementStock } from '../../mouvementstocks/entities/mouvementstock.entity';

@Entity()
export class Medicament {
  @PrimaryGeneratedColumn()
  medicament_id: number;

  @Column()
  nom: string;

  @Column()
  reference: string;

  @Column()
  categorie: string;

  @Column({ nullable: true })
  stock: number;

  @Column({ nullable: true })
  date_expiration: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  prix: number;

  @ManyToOne(() => Fournisseur, (fournisseur) => fournisseur.medicaments)
  fournisseur: Fournisseur;

  @OneToMany(() => MouvementStock, (mouvement) => mouvement.medicament)
  mouvements: MouvementStock[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
