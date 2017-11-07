import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app2',
    templateUrl: `app/app.component.html`,
    styleUrls: [`app/app.component.css`]
})
export class AppComponent { 
    name= 'Кирилл',
    age= '';
    count: number=0;
    increase() : void {
        this.count++;
        console.log($event);
    }
}