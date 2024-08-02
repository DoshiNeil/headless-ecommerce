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

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    CategoryModule,
    TagModule,
    AttributeModule,
    VariantModule,
   // need to better handle the routes as they start becoming bigger 
    RouterModule.register([
      {
        path: 'product',
        module: ProductModule,
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
export class AppModule { }
