import{ Component } from '@angular/core';
@Component({
    templateUrl: './word.component.html',
    selector:'app-word',
    styleUrls:['./word.component.css']

})
export class WordComponent{
    hoten="Ho Trung";
    forgot=false;
    showhide(){
       this.forgot = !this.forgot;
    }
}
 