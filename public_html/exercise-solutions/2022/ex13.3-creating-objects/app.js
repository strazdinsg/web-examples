// Solution for exercise 13.3

/////////////////////////////
// Part 1: Person
/////////////////////////////

//////// Object literal /////////
let person1 = {
  firstname: "John",
  lastname: "Doe",
};

///// Constructor function //////
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

let person2 = new Person("John", "Snow");

///////////// Class /////////////
// Should not use the same name as the constructor function
class PersonClass {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let person3 = new PersonClass("Bill", "Tages");

//////// Object.create() ////////
let person4 = Object.create(person1); // Crate a duplicate of person1

/////////////////////////////
// Part 2: GameObject
/////////////////////////////

//////// Object literals /////////
// We can also use const here, because we will not change the value of player1 variable - it will always refer to
// the same object
const player1 = {
  x: 12,
  y: -20,
  name: "Player 1",
  life: 20,
  decreaseLife: function (delta) {
    this.life -= delta;
    if (this.life < 0) {
      this.life = 0;
    }
  },
  move: function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  },
  isAlive: function () {
    return this.life > 0;
  },
};

// Notice the duplication of functions? Object literals are good for one-of-a-kind objects
const enemy1 = {
  x: 22,
  y: 0,
  name: "Enemy 1",
  life: 200,
  decreaseLife: function (delta) {
    this.life -= delta;
    if (this.life < 0) {
      this.life = 0;
    }
  },
  move: function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  },
  isAlive: function () {
    return this.life > 0;
  },
};

///// Constructor function //////
function GameObject(x, y, life, name) {
  this.x = x;
  this.y = y;
  this.life = life;
  this.name = name;

  this.decreaseLife = function (delta) {
    this.life -= delta;
    if (this.life < 0) {
      this.life = 0;
    }
  };

  this.move = function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  };

  this.isAlive = function () {
    return this.life > 0;
  };
}

const player2 = new GameObject(10, 20, 30, "Player 2");
const enemy2 = new GameObject(11, 12, 13, "Enemy 2");

///////////// Class /////////////
class GameObjectClass {
  constructor(x, y, life, name) {
    this.x = x;
    this.y = y;
    this.life = life;
    this.name = name;
  }

  decreaseLife(delta) {
    this.life -= delta;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  move(deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  }

  isAlive() {
    return this.life > 0;
  }
}

const player3 = new GameObjectClass(44, 55, 600, "Player 3");
const enemy3 = new GameObjectClass(441, 551, 601, "Enemy 3");

//////// Object.create() ////////
const player4 = Object.create(player1);
player4.name = "Player 4";
enemy4 = Object.create(enemy1);
enemy4.name = "Enemy4";
