import { IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  productId: string;
  imageName: string;
}

export class CreateImageRequestDto {
  @IsString()
  imageName: string;
}
