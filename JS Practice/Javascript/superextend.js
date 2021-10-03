class Pet {
    constructor(name, age) {
        console.log(`inside pet constructor`);
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating!`);
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log(`inside cat constructor`);
        super(name, age);
        this.livesLeft = livesLeft;
    }

    meow() {
        console.log(`Meeooowww!`);
    }
}

class Dog extends Pet {
    bark() {
        console.log(`Bhoww bhooowww!`);
    }
    eat() {
        return `${this.name} is scarfing the food!`;
    }
}