import { Component, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Component({
    selector: 'app-sign',
    template:`
    <form (submit)="onsub(formSignIn);" #formSignIn="ngForm">
        <p *ngIf="txtEmail.touched && txtEmail.errors?.required " style="color:red">Vui lòng nhập email</p>
        <p *ngIf="txtEmail.touched && txtEmail.errors?.email " style="color:red">Vui lòng nhập đúng địa chỉ email</p>
        <input placeholder = "Email" ngModel #txtEmail= "ngModel" name="email" required email>
        <br><br>
        <input type="password" placeholder = "Password" [(ngModel)]="password" name="password">
        <br><br>
        <button [disabled]="formSignIn.invalid" >Submit</button>  
        <br><br>
        <button (click)="postTo();">POST</button>
    </form>  
    `      
})
export class SignInComponent{
    email='';
    password='';
    constructor(private http : Http){

         
    }
    onsub(formSignIn:any){
        const url = 'http://localhost:3000/signin';
        const headers = new Headers ({'Content-Type' : 'application/json'});
        const body = JSON.stringify(formSignIn.value);
        this.http.post(url, body, {headers} )
        .toPromise()
        .then(res => res.json())
        .then(resText =>console.log(resText));
    }
    postTo(){
        const url = 'http://localhost:3000/signin';
        const headers = new Headers ({'Content-Type' : 'application/json'});
        const body = JSON.stringify({name:"trung"});
        this.http.post(url, body, {headers} )
        .toPromise()
        .then(res => res.text())
        .then(resText =>console.log(resText));
    }
}