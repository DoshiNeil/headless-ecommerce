import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { CreateAttributeDTO } from './DTO/CreateAttributeDTO';
import { Attribute } from '@prisma/client';
import { UpdateAttributeDTO } from './DTO/UpdateAttributeDTO';
import { CreateVariantDto } from 'src/variant/dto/createVariant.dto';

@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) { }

  @Post()
  create(@Body() createAttributeDTO: CreateAttributeDTO) {
    return this.attributeService.create(createAttributeDTO);
  }

  @Post(':id/variant')
  createVariant(
    @Param('id') id: Pick<Attribute, 'id'>,
    @Body() createVariant: CreateVariantDto,
  ) {
    return this.attributeService.createVariant(id, createVariant);
  }

  @Get()
  findAll() {
    return this.attributeService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: Pick<Attribute, 'id'>) {
    return this.attributeService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Pick<Attribute, 'id'>,
    @Body() data: UpdateAttributeDTO,
  ) {
    return this.attributeService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: Pick<Attribute, 'id'>) {
    return this.attributeService.remove(id);
  }
}
