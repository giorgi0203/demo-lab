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
      username: 'johndoe',
      accounts: [ 
        {
          id: 1,
          name: 'Account 1',
          iban: 'NL91ABNA0417164300',
          bankInfo: {
            id: 1,
            name: 'ABN AMRO',
            address: 'Burgemeester van der Meijdenlaan',
            city: 'Amsterdam',
            country: 'Netherlands'
          }
        },
        {
          id: 2,
          name: 'Account 2',
          iban: 'NL91ABNA0417164300',
          bankInfo: {
            id: 2,
            name: 'ABN AMRO',
            address: 'Burgemeester van der Meijdenlaan',
            city: 'Amsterdam',
            country: 'Netherlands'
          }
        },
        {
          id: 3,
          name: 'Account 3',
          iban: 'NL91ABNA0417164300',
          bankInfo: {
            id:3,
            name: 'ABN AMRO',
            address: 'Burgemeester van der Meijdenlaan',
            city: 'Amsterdam',
            country: 'Netherlands'
          }
        },
        {
          id: 4,
          name: 'Account 4',
          iban: 'NL91ABNA0417164300',
          bankInfo: {
            id: 4,
            name: 'ABN AMRO',
            address: 'Burgemeester van der Meijdenlaan',
            city: 'Amsterdam',
            country: 'Netherlands'
          }
        },
      ]
    }
    return userData;
  }
}
