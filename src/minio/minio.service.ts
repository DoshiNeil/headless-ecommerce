import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Client;
  constructor(private configService: ConfigService) {
    this.minioClient = new Client({
      endPoint: this.configService.get<string>('MINIO_ENDPOINT'),
      port: parseInt(this.configService.get<string>('MINIO_PORT')),
      useSSL: false,
      accessKey: this.configService.get<string>('MINIO_ACCESSKEY'),
      secretKey: this.configService.get<string>('MINIO_SECRETKEY'),
    });
  }

  async getPresignedUrl(
    bucketName: string,
    objectName: string,
  ): Promise<string> {
    return this.minioClient.presignedPutObject(bucketName, objectName, 500);
  }
}
