import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name='';
  ishighlt=false;
  showhide(){
    this.ishighlt = !this.ishighlt;
 }
  constructor() { }

  ngOnInit(): void {
  }
}
