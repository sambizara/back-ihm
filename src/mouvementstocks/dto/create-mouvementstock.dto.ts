export class CreateMouvementstockDto {
  medicament_id: number;
  type_mouvement: string;
  quantite: number;
  date_mouvement?: Date;
}
