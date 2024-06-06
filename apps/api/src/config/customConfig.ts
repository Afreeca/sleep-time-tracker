import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService extends NestConfigService {
  get getAppPort(): number | undefined {
    return this.get<number>('APP_PORT');
  }

  get getAppName(): string | undefined {
    return this.get<string>('APP_NAME');
  }

  get getEnvironment(): string | undefined {
    return this.get<string>('NODE_ENV');
  }

  // get getMongoHost(): string | undefined {
  //   return this.get<string>('MONGO_ATLAS_USER');
  // }

  // get getMongoPort(): string | undefined {
  //   return this.get<string>('MONGO_ATLAS_PASSWORD');
  // }
}
