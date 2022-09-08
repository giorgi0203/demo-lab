import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { AutoMap } from "@automapper/classes";
import { createMap, typeConverter, forMember, mapFrom } from "@automapper/core";
import { MapperService } from "../services/mapper/mapper.service";
import { UserFormAccountDto } from "./account-models/account-form.model";
import { UserFormBankInfoDto } from "./account-models/bank-info.model";
import { UserHttpDto } from "./user-http-dto.model";

function setupMapper(mappingConfigurator: any) {
    // // eslint-disable-next-line prefer-rest-params
    // console.log({ arguments }, { arg });

    return (ctor: any) => {
        const mapper = mappingConfigurator();
        console.log(mapper);

    }

}



@setupMapper(() => {
    return createMap(MapperService.getMapper(),
        UserHttpDto,
        UserFormDto,
        typeConverter(Number, FormControl<number>, (value) => new FormControl(value, { nonNullable: true, validators: [Validators.required] })),
        typeConverter(String, FormControl<string>, (value) => new FormControl(value, { nonNullable: true })),
        forMember(
            (destination) => destination.accounts,
            mapFrom(({ accounts }) => new FormArray(accounts.map((account) => new FormGroup<UserFormAccountDto>({
                id: new FormControl(account.id, { nonNullable: true, validators: [Validators.required] }),
                name: new FormControl(account.name, { nonNullable: true }),
                iban: new FormControl(account.iban, { nonNullable: true }),
                bankInfo: new FormGroup<UserFormBankInfoDto>({
                    id: new FormControl(account.bankInfo.id, { nonNullable: true }),
                    name: new FormControl(account.bankInfo.name, { nonNullable: true }),
                    address: new FormControl(account.bankInfo.address, { nonNullable: true }),
                    city: new FormControl(account.bankInfo.city, { nonNullable: true }),
                    country: new FormControl(account.bankInfo.country, { nonNullable: true }),

                })
            })))),
        ),
        forMember(
            (destination) => destination.age,
            mapFrom((source) => new FormControl(source.age, { nonNullable: true, validators: [Validators.min(31)] })),
        )
    );
})
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


