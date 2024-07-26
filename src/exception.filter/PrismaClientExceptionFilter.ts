import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = 400; // Bad Request by default

    let message = 'An error occurred';
    let suggestion = 'Please try again later.';

    switch (exception.code) {
      case 'P2002':
        message = 'A unique constraint violation occurred.';
        suggestion = 'Please check for duplicates or use a different value.';
        break;
      case 'P2025':
        message = 'The requested record was not found.';
        suggestion = 'Please verify the record ID or create a new record.';
        break;
      default:
        message = 'An unknown error occurred.';
        suggestion = 'Please contact support.';
        break;
    }
    response.status(status).json({
      statusCode: status,
      message,
      suggestion,
    });
  }
}

