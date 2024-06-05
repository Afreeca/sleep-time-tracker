import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService extends NestConfigService {
  get getAppPort(): number | undefined {
    return this.get<number>('APP_PORT');
  }

  get getAppName(): number | undefined {
    return this.get<number>('APP_NAME');
  }

  get getEnvironment(): number | undefined {
    return this.get<number>('NODE_ENV');
  }
}
