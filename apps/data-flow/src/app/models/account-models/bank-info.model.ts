import { FormControl } from "@angular/forms";
import { AutoMap } from "@automapper/classes";

export class UserFormBankInfoDto {

    @AutoMap()
    id!: FormControl<number>;

    @AutoMap()
    name!: FormControl<string>;

    @AutoMap()
    address!: FormControl<string>;

    @AutoMap()
    city!: FormControl<string>;

    @AutoMap()
    country!: FormControl<string>;
}