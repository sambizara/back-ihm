// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// @Entity('users') // Le nom de la table dans la base de données
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number; // Clé primaire auto-générée
//   @Column({ unique: true })
//   username: string; // Nom d'utilisateur unique
//   @Column()
//   password: string; // Mot de passe haché
//   @Column({ nullable: true })
//   email?: string; // Email facultatif
//   @Column({ default: true })
//   isActive: boolean; // Indique si l'utilisateur est actif
// }

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
