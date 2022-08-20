export interface Message {
  message: string;
}

/**
 * user dto
 */
export interface ApiUserDto {
  id: number;
  name: string;
  username: string;
  age: number;
  accounts: ApiAccountDto[];
  password: string;
}
export interface ApiAccountDto {
  id: number;
  name: string;
  iban: string;
  bankInfo: ApiBankInfoDto;

}
export interface ApiBankInfoDto {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
}
