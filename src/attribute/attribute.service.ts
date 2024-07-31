import { Injectable } from '@nestjs/common';
import { Attribute } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAttributeDTO } from './DTO/UpdateAttributeDTO';
import { CreateAttributeDTO } from './DTO/CreateAttributeDTO';
import { CreateVariantDto } from 'src/variant/dto/createVariant.dto';
import { VariantService } from 'src/variant/variant.service';

@Injectable()
export class AttributeService {
  constructor(private prisma: PrismaService, private variantService: VariantService) { }
  async create(data: CreateAttributeDTO) {
    const { name, variants } = data;
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
    return this.prisma.attribute.update({
      where: { id: id as unknown as string },
      data,
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

  async createVariant(id: Pick<Attribute, 'id'>, data: CreateVariantDto){
      return this.variantService.create(id, data);
  }
}
