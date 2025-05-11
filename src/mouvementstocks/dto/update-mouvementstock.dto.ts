import { PartialType } from '@nestjs/mapped-types';
import { CreateMouvementstockDto } from './create-mouvementstock.dto';

export class UpdateMouvementstockDto extends PartialType(
  CreateMouvementstockDto,
) {}
