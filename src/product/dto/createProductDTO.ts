import { ProductStatus } from '@prisma/client';

export class CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  stock?: number;
  category?: string;
  seoTitle?: string;
  seoDescription?: string;
  status?: ProductStatus; 
}
