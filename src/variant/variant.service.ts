import { Injectable } from '@nestjs/common';
import { Attribute, Variant } from '@prisma/client';
import { CreateVariantDto } from './dto/createVariant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateVariantDto } from './dto/updateVariant.dto';

@Injectable()
export class VariantService {
  constructor(private prisma: PrismaService) { }
  async create(attributeId: Pick<Attribute, 'id'>, data: CreateVariantDto) {
    return this.prisma.variant.create({
      data: {
        ...data,
        attributeId: attributeId as unknown as string,
      },
    });
  }

  async update(id: Pick<Variant, 'id'>, data: UpdateVariantDto) {
    return this.prisma.attribute.update({
      where: {
        id: id as unknown as string,
      },
      data,
    });
  }

  async findOne(id: Pick<Variant, 'id'>) {
    return this.prisma.attribute.findUnique({
      where: { id: id as unknown as string },
    });
  }

  async remove(id: Pick<Variant, 'id'>) {
    return this.prisma.attribute.delete({
      where: { id: id as unknown as string },
      include: { variants: true },
    });
  }
}
