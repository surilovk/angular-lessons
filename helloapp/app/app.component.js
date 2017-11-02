"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = '';
        this.age = '';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app2',
        template: "<label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F:</label>\n                 <input [(ngModel)]=\"name\" placeholder=\"name\">\n                 <input [(ngModel)]=\"age\" placeholder=\"age\">\n                 <h1>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C {{name}} {{age}} \u043B\u0435\u0442!</h1>",
        styles: ["\n    \t\th1 {color: red;}\n    \t\t:host {\n    \t\t\t/*\u0421\u0435\u043B\u0435\u043A\u0442\u043E\u0440 :host \u0441\u0441\u044B\u043B\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0445\u043E\u0441\u0442\u0438\u0442\u0441\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442. \u0422\u043E \u0435\u0441\u0442\u044C \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u044D\u0442\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <my-app></my-app>*/\n    \t\t\tbackground: #ccc;\n    \t\t\twidth: 100%;\n    \t\t\theight: auto;\n    \t\t\tdisplay: block;\n                \n    \t\t}\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map