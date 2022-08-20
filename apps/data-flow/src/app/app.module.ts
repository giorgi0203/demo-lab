import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { createMap, forMember, mapFrom, typeConverter } from '@automapper/core';
import { MapperService } from './services/mapper/mapper.service';
import { UserDto } from './models/user-form.model';
import { UserHttpDto } from './models/user-http-dto.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

createMap(MapperService.getMapper(),
  UserHttpDto,
  UserDto,
  typeConverter(Number, FormControl<number>, (value) => new FormControl(value, { nonNullable: true, validators: [Validators.required] })),
  typeConverter(String, FormControl<string>, (value) => new FormControl(value, { nonNullable: true })),
  forMember(
    (destination) => destination.age,
    mapFrom((source) => new FormControl(source.age, { nonNullable: true, validators: [Validators.min(31)] })),
  )
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
