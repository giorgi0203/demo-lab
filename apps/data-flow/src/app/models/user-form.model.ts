import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { AutoMap } from "@automapper/classes";
import { UserFormAccountDto } from "./account-models/account-form.model";

export class UserFormDto {
    @AutoMap()
    id!: FormControl<number>;
    @AutoMap()
    name!: FormControl<string>
    @AutoMap()
    username!: FormControl<string>
    @AutoMap()
    age!: FormControl<number>;

    @AutoMap()
    accounts?: FormArray<FormGroup<UserFormAccountDto>>;

}

