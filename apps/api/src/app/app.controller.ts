import { Controller, Get } from '@nestjs/common';

import { ApiUserDto, Message } from '@demo-lab/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('getUser')
  getData(): ApiUserDto {
    return this.appService.getData();
  }
}
