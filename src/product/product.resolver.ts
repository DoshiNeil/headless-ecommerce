import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from 'src/graphql';
import { CreateProductDTO } from './dto/createProductDTO';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductService) { }

  @Query('products')
  async getProducts() {
    return this.productsService.findAll();
  }

  @Query('product')
  async findOneById(id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Mutation('createProduct')
  async create(
    @Args('createProductInput') args: CreateProductDTO,
  ): Promise<Product> {
    const createdProduct = await this.productsService.create(args);
    return createdProduct;
  }
}
