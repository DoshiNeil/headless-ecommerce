import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDTO } from './dto/CreateCategoryDTO';
import { UpdateCategoryDTO } from './dto/UpdateCategoryDTO';
import { Category } from '@prisma/client';

type CategoryId = Pick<Category, 'id'>;

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryDTO) {
    const { name, parent: parentName } = data;

    const parent = parentName
      ? await this.prisma.category.findUnique({
          where: { name: parentName },
        })
      : undefined;

    return this.prisma.category.create({
      data: {
        name,
        parentId: parent ? parent.id : undefined,
      },
    });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findAllSubCategories(id: CategoryId) {
    return this.prisma.category.findMany({
      where: { parentId: id as unknown as string },
    });
  }

  async findOne(id: CategoryId) {
    return this.prisma.category.findUnique({
      where: { id: id as unknown as string },
    });
  }

  async update(id: CategoryId, data: UpdateCategoryDTO) {
    const { name, parent: parentName } = data;
    const parent = parentName
      ? await this.prisma.category.findUnique({
          where: { name: parentName },
        })
      : undefined;

    let updatedCategory = parent
      ? {
          name,
          parentId: parent.id,
        }
      : { name };
    return this.prisma.category.update({
      data: updatedCategory,
      where: { id: id as unknown as string },
    });
  }

  async remove({
    id,
    orphanProducts = false,
    orphanSubCategories = false,
  }: {
    id: CategoryId;
    orphanProducts?: boolean;
    orphanSubCategories?: boolean;
  }) {
    // Check if the Categories have any subcategories
    const subCategories = await this.prisma.category.findFirst({
      where: { parentId: id as unknown as string },
    });

    if (subCategories && orphanSubCategories)
      await this.prisma.category.updateMany({
        where: { parentId: id as unknown as string },
        data: { parentId: null },
      });

    // Check if the Categories have any attached products
    const products = await this.prisma.product.findFirst({
      where: { categoryId: id as unknown as string },
    });

    if (products && orphanProducts) {
      await this.prisma.product.updateMany({
        where: { categoryId: id as unknown as string },
        data: { categoryId: null },
      });
    }

    if(subCategories && !orphanSubCategories){
      return { message:" Cannot delete Category as it has Subcategories"}
    }

    if(products && !orphanProducts){
      return { message:" Cannot delete Category as it has Products"}
    }

    return this.prisma.category.delete({
      where: { id: id as unknown as string },
    });
  }
}
