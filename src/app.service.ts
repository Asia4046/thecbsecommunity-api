import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {
    api_name: string;
    api_id: string;
    api_version: string;
    api_status: string;
    api_message: string;
  } {
    return {
      api_name: 'The CBSE Community Questions API',
      api_id: 'DEV_0.0.1',
      api_version: '0.0.1-dev',
      api_status: 'Online',
      api_message: 'Welcome!',
    };
  }
}
