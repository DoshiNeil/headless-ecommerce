import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDTO } from './dto/CreateCategoryDTO';
import { UpdateCategoryDTO } from './dto/UpdateCategoryDTO';
import { Category } from '@prisma/client';

type CategoryId = Pick<Category, 'id'>;

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) { }

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
        parentId:parent.id,
      }
      : { name };
    return this.prisma.category.update({
      data: updatedCategory,
      where: { id: id as unknown as string },
    });
  }
  async remove(id: CategoryId) {
    return this.prisma.category.delete({
      where: { id: id as unknown as string },
    });
  }
}
