import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from './dto/createProductDTO';
import { UpdateProductDTO } from './dto/UpdateProductDTO';
import { Product } from '@prisma/client';

type ProductId = Pick<Product, 'id'>;

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateProductDTO) {
    const product = await this.prisma.product.findFirst({
      where: { name: data.name.trim() },
    });
    if (!!product) {
      return { error: `Product with name ${data.name} already exists` };
    }
    return this.prisma.product.create({ data });
  }
  async findAll() {
    return this.prisma.product.findMany();
  }
  async findOne(id: ProductId) {
    return this.prisma.product.findUnique({
      where: { id: id as unknown as string },
    });
  }
  async update(id: ProductId, data: UpdateProductDTO) {
    return this.prisma.product.update({
      where: { id: id as unknown as string },
      data,
    });
  }
  async remove(id: ProductId) {
    return this.prisma.product.delete({
      where: { id: id as unknown as string },
    });
  }
}
