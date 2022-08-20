import { AutoMap } from "@automapper/classes";
import { UserHttpBankInfoDto } from "./bank-http-info.model";

export class UserHttpAccountDto {
    @AutoMap()
    id!: number;
    @AutoMap()
    name!: string;
    @AutoMap()
    iban!: string;
    @AutoMap(()=>UserHttpBankInfoDto)
    bankInfo!: UserHttpBankInfoDto;
}
