export class CreateMedicamentDto {
  nom: string;
  reference: string;
  categorie: string;
  stock?: number;
  date_expiration?: Date;
  prix?: number;
  fournisseur_id?: number;
}
