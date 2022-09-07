import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUserDto, Message } from '@demo-lab/api-interfaces';
import { MapperService } from './services/mapper/mapper.service';
import { UserHttpDto } from './models/user-http-dto.model';
import { configureUserFormMapper, UserFormDto } from './models/user-form.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'demo-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  form!: FormGroup<UserFormDto>;

  constructor(private http: HttpClient, public fb: FormBuilder) { }

  ngOnInit(): void {
    configureUserFormMapper()

  }


  submitForm() {
    // this.http.get<UserHttpDto>('/api/getUser').subscribe(user => {
    //   const dto = MapperService.getMapper().map(user, UserHttpDto, UserDto);
    //   this.form = this.fb.group<UserDto>(dto);
    //   console.log(dto, this.form);

    // })
  }
  fetchForm() {
    this.http.get<UserHttpDto>('/api/getUser').subscribe(user => {
      const dto = MapperService.getMapper().map(user, UserHttpDto, UserFormDto);
      this.form = this.fb.group<UserFormDto>(dto);
      console.log({ dto }, { user }, { form: this.form.value });

    })
  }
}
