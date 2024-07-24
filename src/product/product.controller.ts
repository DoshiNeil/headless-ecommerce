import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/createProductDTO';
import { Product } from '@prisma/client';
import { UpdateProductDTO } from './dto/UpdateProductDTO';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService){}
 
  @Post()
  create(@Body() createProductDTO : CreateProductDTO){
    return this.productService.create(createProductDTO);
  }

  @Get()
  findAll(){
    return this.productService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: Pick<Product, 'id'>){
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: Pick<Product, 'id'>, @Body() data: UpdateProductDTO){
    return this.productService.update(id ,data)
  }

  @Delete(':id')
  delete(@Param('id') id: Pick<Product, 'id'>){
    return this.productService.remove(id);
  }
}
