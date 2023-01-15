import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'demo-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(private http: HttpClient, public fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('init');
  }


}
