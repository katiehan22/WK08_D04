Function.prototype.inherits = function(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject(speed) {
  this.speed = speed;
}

MovingObject.prototype.tellSpeed = function() {
  console.log(`I am moving at ${this.speed} mph.`);
}

function Ship(speed, color) {
  this.speed = speed;
  this.color = color;
}
Ship.inherits(MovingObject);

Ship.prototype.tellColor = function() {
  console.log(`My color is ${this.color}`);
}


function Asteroid(speed, size) {
  this.speed = speed;
  this.size = size;
}
Asteroid.inherits(MovingObject);

Asteroid.prototype.tellSize = function() {
  console.log(`My size is ${this.size}`);
}

// movingObject1 = new MovingObject(50);
// movingObject1.tellSpeed(); 

// ship1 = new Ship(100, 'blue');
// ship1.tellSpeed();
// ship1.tellColor();
// ship1.tellSize();

asteroid1 = new Asteroid(500, 5);
asteroid1.tellSpeed();
asteroid1.tellColor();
asteroid1.tellSize();