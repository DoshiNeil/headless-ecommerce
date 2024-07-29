import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { AttributeService } from './attribute/attribute.service';
import { AttributeModule } from './attribute/attribute.module';

@Module({
  imports: [PrismaModule,ProductModule, CategoryModule, TagModule, AttributeModule],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService, AttributeService],
})
export class AppModule {}
