// ES6 class to create a Car
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // Getter to convert speed to mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // Setter to convert speed from mi/h to km/h
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const car1 = new CarCl("Ford", 120);

car1.accelerate();
car1.brake();

console.log(`${car1.make} is going at ${car1.speedUS} mi/h`);

car1.speedUS = 100;
console.log(`${car1.make} is going at ${car1.speed} km/h`);

car1.accelerate();
car1.brake();
