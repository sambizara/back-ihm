import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medicament } from '../../medicaments/entities/medicament.entity';

@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn()
  fournisseur_id: number;

  @Column()
  nom: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true, type: 'text' })
  adresse: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Medicament, (medicament) => medicament.fournisseur)
  medicaments: Medicament[];
}
