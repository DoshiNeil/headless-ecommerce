import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from './dto/createProductDTO';
import { UpdateProductDTO } from './dto/UpdateProductDTO';
import { Product } from '@prisma/client';

type ProductId = Pick<Product, 'id'>;

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDTO) {
    let categoryId: string = undefined;
    let categoryName = data.category;
    delete data.category;

    if (categoryName) {
      // FIXME: need a fallback case if the category name is incorrect / doesn't exist
      await this.prisma.category
        .findUnique({
          select: { id: true },
          where: { name: categoryName },
        })
        .then((data) => (categoryId = data.id));
    }

    let product: Omit<CreateProductDTO, 'category'> & { categoryId?: string } =
      categoryName ? { ...data, categoryId } : data;

    const createdProduct = await this.prisma.product.create({ data: product });
    delete createdProduct.categoryId;
    return { ...createdProduct, category: categoryName };
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
    let categoryId: string = undefined;
    let categoryName = data.category;
    delete data.category;

    if (categoryName) {
      await this.prisma.category
        .findUnique({
          select: { id: true },
          where: { name: categoryName },
        })
        .then((data) => (categoryId = data.id));
    }

    let product: Omit<UpdateProductDTO, 'category'> & { categoryId?: string } =
      categoryName ? { ...data, categoryId } : data;

    return this.prisma.product.update({
      where: { id: id as unknown as string },
      data: product,
    });
  }
  async remove(id: ProductId) {
    return this.prisma.product.delete({
      where: { id: id as unknown as string },
    });
  }
}
