const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);


// Define the Animal class
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Define the Mammal class that extends from Animal
class Mammal extends Animal {
    sound(animalSound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. I ${animalSound}`;
    }
}

// Create an instance of Mammal for farmerCow
const farmerCow = new Mammal("Lily", "cow", "brown and white");


// Call the sound method
console.log(farmerCow.sound("moos"));