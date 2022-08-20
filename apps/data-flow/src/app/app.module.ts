import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createMap, forMember, mapFrom, typeConverter } from '@automapper/core';
import { AppComponent } from './app.component';
import { UserFormDto } from './models/user-form.model';
import { UserHttpDto } from './models/user-http-dto.model';
import { MapperService } from './services/mapper/mapper.service';
import { UserFormAccountDto } from './models/account-models/account-form.model';
import { UserFormBankInfoDto } from './models/account-models/bank-info.model';

createMap(MapperService.getMapper(),
  UserHttpDto,
  UserFormDto,
  typeConverter(Number, FormControl<number>, (value) => new FormControl(value, { nonNullable: true, validators: [Validators.required] })),
  typeConverter(String, FormControl<string>, (value) => new FormControl(value, { nonNullable: true })),
  forMember(
    (destination) => destination.accounts,
    mapFrom(({accounts}) => new FormArray(accounts.map((account) => new FormGroup<UserFormAccountDto>({
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
// Array<UserHttpAccountDto>,
//     FormArray<FormGroup<UserFormAccountDto>>,
//     (value) => {
//       console.log({value});
//       return new FormArray(value.map(account => {

//         return new FormGroup(MapperService.getMapper().map(account, UserHttpAccountDto, UserFormAccountDto))
//       }))
//     }

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
