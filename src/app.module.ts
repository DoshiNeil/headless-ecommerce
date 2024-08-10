import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
//import { CategoryModule } from './category/category.module';
//import { TagModule } from './tag/tag.module';
//import { AttributeModule } from './attribute/attribute.module';
//import { VariantModule } from './variant/variant.module';
//import { ImageModule } from './image/image.module';
//import { MinioModule } from './minio/minio.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [ProductModule],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    //CategoryModule,
    //MinioModule,
    //TagModule,
    //AttributeModule,
    //VariantModule,
    //ImageModule,
  ],
})
export class AppModule { }
