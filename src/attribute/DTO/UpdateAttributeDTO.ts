import { IsString } from 'class-validator';

export class UpdateAttributeDTO {
  @IsString()
  name?: string;
}
