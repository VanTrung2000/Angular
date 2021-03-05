import { Component, Host, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  isshow=true;
  newho='';
  newten='';
  anform=false;
  fillter='hienthi';
  arrCar=['bmw','toyota','honda'];

  List=[
    {id: 1, ho:'Hồ', ten:'Trung', gioitinh:true},
    {id: 2, ho:'Nguyễn Thị', ten:'A', gioitinh:false},
    {id: 3, ho:'Hồ', ten:'B', gioitinh:true},
    {id: 4, ho:'Phạm Thị', ten:'C', gioitinh:false},
    {id: 5, ho:'Nguyên', ten:'Lào', gioitinh:true},
    {id: 6, ho:'Phạm Thị', ten:'D', gioitinh:false},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  adds(){
    this.List.unshift({
      id: this.List.length + 1,
      ho: this.newho,
      ten: this.newten,
      gioitinh: false,
});
  this.newho='';
  this.newten='';
  }
  dele(id:Number){
   const index = this.List.findIndex(list => list.id ===id);
   this.List.splice(index,1);
  }
  getshow(gioitinh : boolean){
    const tatca = this.fillter === 'hienthi';
    const nam1 = this.fillter === 'nam' && gioitinh;
    const nu1 = this.fillter === 'nu' && !gioitinh;
    return tatca || nam1 || nu1
  }
}
