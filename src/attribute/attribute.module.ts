import { Module } from '@nestjs/common';
import { AttributeController } from './attribute.controller';
import { AttributeService } from './attribute.service';
import { VariantModule } from 'src/variant/variant.module';

@Module({
  controllers: [AttributeController],
  providers: [AttributeService],
  imports:[VariantModule]
})
export class AttributeModule {}
