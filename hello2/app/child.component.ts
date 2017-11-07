import { Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
                <p>Привет {{name}}</p>`,
    styles: [`h2, p {color:green;}`]
})
export class ChildComponent { 
    name= "Евгений";
}