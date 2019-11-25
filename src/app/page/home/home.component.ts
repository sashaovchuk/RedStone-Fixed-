import { Component, OnInit } from '@angular/core';
import { NewRequest } from 'src/app/shared/classes/new-request.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat = 49.811056;
  lng = 24.012966;
  request: NewRequest = {
    email: null,
    password: null
  };
  constructor() {
  }
  choseLocation(event): void{
    this.lat = event.coords.lat
    this.lng = event.coords.lng
  }
  ngOnInit() {
  }

  saveRequest(rqtForm: NgForm): void{
    if(rqtForm.valid){
      console.log(rqtForm.valid)
      rqtForm.resetForm()
    }
  }
}
