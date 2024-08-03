import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { MinioModule } from 'src/minio/minio.module';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  imports:[MinioModule],
})
export class ImageModule {}
