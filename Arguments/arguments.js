function sum(...args){
  let total = 0;
  for(let num of args){
    total += num;
  }
  return total;
}

function sum2() {
  let total = 0;
  for (let num of arguments) {
    total += num;
  }
  return total;
}

// Function.prototype.myBind = function(context){
//   let that = this;
//   let args = Array.from(arguments).slice(1);
//   // args = args.slice(1);
//   return () => {
//     let callArgs = Array.from(arguments);
//     return that.apply(context, args.concat(callArgs));
//   };
// }

Function.prototype.myBind = function (context) {
  let that = this;
  let args = Array.from(arguments).slice(1);
  // args = args.slice(1);
  return function _bound() {
    let callArgs = Array.from(arguments);
    return that.apply(context, args.concat(callArgs));
  };
}

Function.prototype.myBind2 = function (context, ...bindArgs) {
  return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
