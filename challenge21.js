function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Audi", 90);

car1.accelerate(); // BMW is going at 130 km/h
car1.brake(); // BMW is going at 125 km/h

car2.accelerate(); // Audi is going at 100 km/h
car2.brake(); // Audi is going at 95 km/h

// Experiment with calling accelerate and brake multiple times
car1.accelerate(); // BMW is going at 135 km/h
car1.brake(); // BMW is going at 130 km/h

car2.accelerate(); // Audi is going at 105 km/h
car2.brake(); // Audi is going at 100 km/h
