import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { AttributeModule } from './attribute/attribute.module';
import { VariantModule } from './variant/variant.module';
import { RouterModule } from '@nestjs/core';
import { ImageModule } from './image/image.module';
import { MinioModule } from './minio/minio.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    MinioModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    CategoryModule,
    TagModule,
    AttributeModule,
    VariantModule,
    ImageModule,
    // need to better handle the routes as they start becoming bigger
    RouterModule.register([
      {
        path: 'product',
        module: ProductModule,
        children: [
          {
            path: ':productId/image',
            module: ImageModule,
          },
          {
            path: 'image',
            module: ImageModule,
          },
        ],
      },
      {
        path: 'tag',
        module: TagModule,
      },
      {
        path: 'category',
        module: CategoryModule,
      },
      {
        path: 'attribute',
        module: AttributeModule,
        children: [
          {
            path: 'variant',
            module: VariantModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
