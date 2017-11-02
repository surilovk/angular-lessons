import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app2',  
    templateUrl: `app/app.component.html`,
    styleUrls: [`app/app.component.css`]  //Вынос стилей компонента в отдельный файл        
})
export class AppComponent { 
    name= '',
    age= '';
}
