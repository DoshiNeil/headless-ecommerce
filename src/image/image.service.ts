import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'minio';

@Injectable()
export class ImageService {
  private readonly minioClient: Client;
  constructor(private configService: ConfigService) {
    this.minioClient = new Client({
      endPoint: this.configService.get<string>('MINIO_ENDPOINT'),
      port: this.configService.get<number>('MINIO_PORT'),
      useSSL: false,
      accessKey: this.configService.get<string>('MINIO_ACCESSKEY'),
      secretKey: this.configService.get<string>('MINIO_SECRETKEY'),
    });
  }
}
