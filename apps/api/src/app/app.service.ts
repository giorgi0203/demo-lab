import { Injectable } from '@nestjs/common';
import { ApiUserDto, Message } from '@demo-lab/api-interfaces';

@Injectable()
export class AppService {
  getData(): ApiUserDto {
    const userData: ApiUserDto = {
      age: 30,
      id: null,
      name: 'John Doe',
      password: '123456',
      username: 'johndoe'
    }
    return userData;
  }
}
