const cat = {
    name: "Pussy",
    color: "Grey",
    breed: "Indian",
    meow() {
        console.log("This is : ", this);
        console.log(`${this.name} says Meow!`);
    }
}

const meow = cat.meow;

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        console.log(`EGG`);
        return this.eggCount++;
    }
}

hen.name;
hen.eggCount;
hen.layAnEgg();
hen.layAnEgg();
hen.eggCount;