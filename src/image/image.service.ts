import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './Dto/CreateImage.dto';
import { MinioService } from 'src/minio/minio.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(
    private readonly minio: MinioService,
    private prisma: PrismaService,
  ) {}

  async create(data: CreateImageDto) {
    const urlToUploadImage = await this.minio.getPresignedUrl(
      data.productId,
      data.imageName,
    );

    return await this.prisma.image.create({
      data: { ...data, uploadUrl: urlToUploadImage },
    });
  }
}
