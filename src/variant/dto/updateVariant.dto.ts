import { IsString } from "class-validator";

export class UpdateVariantDto {
  @IsString()
  name:string;
}
