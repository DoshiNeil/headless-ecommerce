import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/CreateCategoryDTO';
import { Category } from '@prisma/client';
import { UpdateCategoryDTO } from './dto/UpdateCategoryDTO';
import { DeleteCategoryDTO } from './dto/DeleteCategoryDTO';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDTO: CreateCategoryDTO) {
    return this.categoryService.create(createCategoryDTO);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: Pick<Category, 'id'>) {
    return this.categoryService.findOne(id);
  }

  @Get(':id/subcategory')
  findSubCategories(@Param('id') id: Pick<Category, 'id'>) {
    return this.categoryService.findAllSubCategories(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Pick<Category, 'id'>,
    @Body() data: UpdateCategoryDTO,
  ) {
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  delete(
    @Param('id') id: Pick<Category, 'id'>,
    @Body() data: DeleteCategoryDTO,
  ) {
    return this.categoryService.remove({ id, ...data });
  }
}
