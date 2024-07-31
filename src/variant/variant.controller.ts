import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { VariantService } from './variant.service';
import { Variant } from '@prisma/client';
import { UpdateVariantDto } from './dto/updateVariant.dto';


@Controller('variant')
export class VariantController {
  constructor(private readonly variantService: VariantService) {}

  @Get(':id')
  find(@Param('id') id: Pick<Variant, 'id'>) {
    return this.variantService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Pick<Variant, 'id'>,
    @Body() data: UpdateVariantDto,
  ) {
    return this.variantService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: Pick<Variant, 'id'>) {
    return this.variantService.remove(id);
  }
}
