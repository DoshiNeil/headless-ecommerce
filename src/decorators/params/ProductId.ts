import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ProductId = createParamDecorator(
  (_, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().params.productId,
);
