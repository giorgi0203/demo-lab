import { FormControl, FormGroup } from "@angular/forms";
import { AutoMap } from "@automapper/classes";
import { UserFormBankInfoDto } from "./bank-info.model";

export class UserFormAccountDto {
    @AutoMap()
    id!: FormControl<number>;
    @AutoMap()
    name!: FormControl<string>;
    @AutoMap()
    iban!: FormControl<string>;
    @AutoMap(()=>UserFormBankInfoDto)
    bankInfo!: FormGroup<UserFormBankInfoDto>;
}
