import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

class CreateVariantDTO {
  @IsString()
  name: string;
  attributeId: string;
}

export class CreateAttributeDTO {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CreateVariantDTO)
  variants: CreateVariantDTO[];
}
