import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductsResolver } from './product.resolver';

@Module({
  providers: [ProductService, ProductsResolver],
})
export class ProductModule {}
