import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

class UpdateVariantDTO {
  @IsString()
  id: string;
  name: string;
}

export class UpdateAttributeDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateVariantDTO)
  variants?: UpdateVariantDTO[];
}
