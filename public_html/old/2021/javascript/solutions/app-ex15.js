// Solution for exercise 15

// 1, 2
var vehicle = {
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
var car = Object.create(vehicle);
car.numberOfSeets = 5;
car.canSeat = function (numberOfPersons) {
  return numberOfPersons <= this.numberOfSeets;
};

// 4
var redPorsche = Object.create(car);
redPorsche.model = "Porsche";
redPorsche.color = "red";
redPorsche.maxSpeed = 320;

// 5
redPorsche.drive(200);

// 6
vehicle.numberOfWheels = 4;

// 7
console.log(`The Porsche has ${redPorsche.numberOfWheels} wheels`);

// 8
var bike = Object.create(vehicle);

// 9
bike.numberOfWheels = 2;

// 10
console.log(`Vehicle has ${vehicle.numberOfWheels} wheels`);
console.log(`Porsche has ${redPorsche.numberOfWheels}`);
console.log(`Bike has ${bike.numberOfWheels} wheels`);
