import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDTO } from './dto/CreateTagDTO';
import { Tag } from '@prisma/client';
import { UpdateTagDTO } from './dto/UpdateTagDTO';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTagDTO) {
    return this.prisma.tag.create({ data });
  }

  async update(id: Pick<Tag, 'id'>, data: UpdateTagDTO) {
    return this.prisma.tag.update({
      where: { id: id as unknown as string },
      data: data,
    });
  }

  async findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: Pick<Tag, 'id'>){
    return this.prisma.tag.findUnique({ where : { id : id as unknown as string}});
  }

  async remove(id: Pick<Tag, 'id'>){
    return this.prisma.tag.delete({ where : { id : id as unknown as string}});
  }
}
