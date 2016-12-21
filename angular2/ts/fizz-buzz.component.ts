import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fizz-buzz',
  templateUrl: 'fizz-buzz.template.html'
})
export class FizzBuzzComponent {

  private max:number = 15;
  private fizz:number = 3;
  private buzz:number = 5;
  private list:any[] = [];

  constructor() {

  }
  
  private calc(){
    this.list = [];

    for(let i = 1; i<=this.max; i++){
      this.list.push({value: this.getFizzBuzz(i)});
    }
  }
  
  private getFizzBuzz(value:number){
    if (value % this.fizz == 0 && value % this.buzz == 0) {
      return 'FizzBuzz';
    } else if (value % this.fizz == 0) {
      return 'Fizz';
    } else if (value % this.buzz == 0) {
      return 'Buzz';
    } else {
      return String(value);
    }
  };
  
}
