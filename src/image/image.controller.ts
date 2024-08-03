import { Body, Controller, Post } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageRequestDto } from './Dto/CreateImage.dto';
import { ProductId } from 'src/decorators/params/ProductId';

@Controller()
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  create(
    @ProductId() productId: string,
    @Body() createImage: CreateImageRequestDto,
  ) {
    return this.imageService.create({
      productId: productId,
      ...createImage,
    });
  }
}
