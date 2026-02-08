import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {api_name: string, api_id: string, api_version: string, api_status: string, api_message: string } {
    return this.appService.getHello();
  }
}
