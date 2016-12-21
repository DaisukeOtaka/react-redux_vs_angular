"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let FizzBuzzComponent = class FizzBuzzComponent {
    constructor() {
        this.max = 15;
        this.fizz = 3;
        this.buzz = 5;
        this.list = [];
    }
    calc() {
        this.list = [];
        for (let i = 1; i <= this.max; i++) {
            this.list.push({ value: this.getFizzBuzz(i) });
        }
    }
    getFizzBuzz(value) {
        if (value % this.fizz == 0 && value % this.buzz == 0) {
            return 'FizzBuzz';
        }
        else if (value % this.fizz == 0) {
            return 'Fizz';
        }
        else if (value % this.buzz == 0) {
            return 'Buzz';
        }
        else {
            return String(value);
        }
    }
    ;
};
FizzBuzzComponent = __decorate([
    core_1.Component({
        selector: 'fizz-buzz',
        templateUrl: 'fizz-buzz.template.html'
    })
], FizzBuzzComponent);
exports.FizzBuzzComponent = FizzBuzzComponent;
