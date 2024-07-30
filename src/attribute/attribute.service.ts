import { Injectable } from '@nestjs/common';
import { Attribute } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAttributeDTO } from './DTO/UpdateAttributeDTO';
import { CreateAttributeDTO } from './DTO/CreateAttributeDTO';

@Injectable()
export class AttributeService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttributeDTO) {
    const { name, variants }  = data;
    return this.prisma.attribute.create({
      data: {
         name,
        variants: {
          create: variants,
        },
      },
      include: { variants: true },
    });
  }

  async update(id: Pick<Attribute, 'id'>, data: UpdateAttributeDTO) {
    const { name, variants } = data;
    return this.prisma.attribute.update({
      where: { id: id as unknown as string },
      data: {
        name,
        variants: {
          updateMany: variants?.map((v) => ({
            where: { id: v.id },
            data: v,
          })),
        },
      },
    });
  }

  async findAll() {
    return this.prisma.attribute.findMany({ include: { variants: true } });
  }

  async findOne(id: Pick<Attribute, 'id'>) {
    return this.prisma.attribute.findUnique({
      where: { id: id as unknown as string },
      include: { variants: true },
    });
  }

  async remove(id: Pick<Attribute, 'id'>) {
    return this.prisma.attribute.delete({
      where: { id: id as unknown as string },
      include: { variants: true },
    });
  }
}
