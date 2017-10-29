import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app2',
    template: `<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <p>Test {{name}}</p>
                 <h1>Добро пожаловать {{name}}!</h1>`
})
export class AppComponent { 
    name= '';
}