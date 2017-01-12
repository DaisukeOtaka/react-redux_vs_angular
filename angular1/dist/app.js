angular.module('FizzBuzzApp', [])
  .controller('FizzBuzzController', function() {

  var fizzBuzz = this;

  this.max = 15;
  this.fizz = 3;
  this.buzz = 5;
  this.list = [];

  this.calc = function(){
    this.list = [];
    for(var i = 1; i<=this.max; i++){
      this.list.push({value: this.getFizzBuzz(i)});
    }
  };
  
  this.getFizzBuzz = function(value){
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
  
});
