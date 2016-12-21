class FizzBuzzLib{

  static calc(max, fizz, buzz){
    let list = [];

    for(let i = 1; i<=max; i++){
      list.push({value: FizzBuzzLib.getFizzBuzz(i, fizz, buzz)});
    }

    return list;
  }
  
  static getFizzBuzz(value, fizz, buzz){
    if (value % fizz == 0 && value % buzz == 0) {
      return 'FizzBuzz';
    } else if (value % fizz == 0) {
      return 'Fizz';
    } else if (value % buzz == 0) {
      return 'Buzz';
    } else {
      return String(value);
    }
  };
  
}

export default FizzBuzzLib;
