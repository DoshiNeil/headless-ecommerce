import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDTO } from './createProductDTO';

export class UpdateProductDTO extends PartialType(CreateProductDTO) { }
