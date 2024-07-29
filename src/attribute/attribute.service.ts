import { Injectable } from '@nestjs/common';
import { Attribute } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAttributeDTO } from './DTO/UpdateAttributeDTO';
import { CreateAttributeDTO } from './DTO/CreateAttributeDTO';

@Injectable()
export class AttributeService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateAttributeDTO) {
    return this.prisma.attribute.create({
      data,
    });
  }

  async update(id: Pick<Attribute, 'id'>, data: UpdateAttributeDTO) {
    return this.prisma.attribute.update({
      where: { id: id as unknown as string },
      data: data,
    });
  }

  async findAll() {
    return this.prisma.attribute.findMany();
  }

  async findOne(id: Pick<Attribute, 'id'>) {
    return this.prisma.attribute.findUnique({
      where: { id: id as unknown as string },
    });
  }

  async remove(id: Pick<Attribute, 'id'>) {
    return this.prisma.attribute.delete({
      where: { id: id as unknown as string },
    });
  }
}
