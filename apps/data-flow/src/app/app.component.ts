import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUserDto, Message } from '@demo-lab/api-interfaces';
import { MapperService } from './services/mapper/mapper.service';
import { UserHttpDto } from './models/user-http-dto.model';
import { UserFormDto } from './models/user-form.model';
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
    console.log('init');
  }


  submitForm() {
    const formValue = this.form.value;
    // const mappedUser = MapperService.getMapper().map(formValue, UserHttpDto,UserFormDto);
    console.log({ formValue });

  }
  fetchForm() {
    this.http.get<UserHttpDto>('/api/getUser').subscribe(fetchedUser => {
      const mappedUser = MapperService.getMapper().map(fetchedUser, UserHttpDto, UserFormDto);
      this.form = this.fb.group<UserFormDto>(mappedUser);
      console.log({ mappedUser }, { fetchedUser },);
      console.log({ formValue: this.form.value });

    })
  }
}
