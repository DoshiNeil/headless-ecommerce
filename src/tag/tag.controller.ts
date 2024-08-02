import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDTO } from './dto/CreateTagDTO';
import { Tag } from '@prisma/client';
import { UpdateTagDTO } from './dto/UpdateTagDTO';

@Controller()
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  create(@Body() createTagDTO: CreateTagDTO) {
    return this.tagService.create(createTagDTO);
  }

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: Pick<Tag, 'id'>) {
    return this.tagService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: Pick<Tag, 'id'>, @Body() data: UpdateTagDTO) {
    return this.tagService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: Pick<Tag, 'id'>) {
    return this.tagService.remove(id);
  }
}
