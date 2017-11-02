import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app2',
    template: `<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <input [(ngModel)]="age" placeholder="age">
                 <h1>Добро пожаловать {{name}} {{age}} лет!</h1>`
    styles: [`
    		h1 {color: red;}
    		:host {
    			/*Селектор :host ссылается на элемент, в котором хостится компонент. То есть в данном случае это элемент <my-app></my-app>*/
    			background: #ccc;
    			width: 100%;
    			height: auto;
    			display: block;
                
    		}
    `]             
})
export class AppComponent { 
    name= '',
    age= '';
}
