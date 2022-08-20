import { FormControl } from "@angular/forms";
import { AutoMap } from "@automapper/classes";

export class UserHttpBankInfoDto {

    @AutoMap()
    id!: number;

    @AutoMap()
    name!: string;

    @AutoMap()
    address!: string;

    @AutoMap()
    city!: string;

    @AutoMap()
    country!: string;
}