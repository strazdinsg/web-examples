// Solution for exercise 12.4

// 1, 2
const Vehicle = {
  maxSpeed: 200,
  color: "gray",
  model: "VW",
  drive: function (speed) {
    if (speed < this.maxSpeed) {
      console.log(
        `${this.model} of ${this.color} color driving at ${speed} km/h`
      );
    } else {
      console.log(
        `Sorry, ${this.model} of ${this.color} color can't go that fast`
      );
    }
  },
};

// 3
const Car = Object.create(Vehicle);

// 4
Car.numberOfSeets = 5;
Car.canSeat = function (numberOfPersons) {
  return numberOfPersons <= this.numberOfSeets;
};

// 5
const redPorsche = Object.create(Car);
redPorsche.model = "Porsche";
redPorsche.color = "red";
redPorsche.maxSpeed = 320;

// 6
redPorsche.drive(200);

// 7
Vehicle.numberOfWheels = 4;

// 8
console.log(`The Porsche has ${redPorsche.numberOfWheels} wheels`);

// 9
const bike = Object.create(Vehicle);

// 10
bike.numberOfWheels = 2;

// 11
console.log(`Vehicle has ${Vehicle.numberOfWheels} wheels`);
console.log(`Porsche has ${redPorsche.numberOfWheels} wheels`);
console.log(`Bike has ${bike.numberOfWheels} wheels`);

// 12 - this one you need to do in the console ;)
