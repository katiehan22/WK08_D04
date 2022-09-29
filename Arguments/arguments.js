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

Function.prototype.myBind = function(context){
  let that = this;
  let args = Array.from(arguments).slice(1);
  // args = args.slice(1);
  return () => {
    let callArgs = Array.from(arguments);
    return that.apply(context, args.concat(callArgs));
  };
}

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

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

