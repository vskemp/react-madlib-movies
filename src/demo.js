// class NameTag {

// }

class Hero {
    //properties/attributes
    //"variables that belong to each object(instance)"
    constructor(health, power) {
        this.health =18;
        this.power=5;
        
    }
    // behaviors/methods
    //"functions that belong to each object(instance)"
    hug(otherHero) {
        // otherHero.health += this.power;
        otherHero.recieveHealth(this.power);
        // console.log(`otherHero has ${otherHero.health}`);
    }
    recieveHealth(healthPoints) {
        this.health += healthPoints;
        console.log(`${this.health} point hug is great!`)
    }
}
const aHero = new Hero();
const anotherHero = new Hero();
aHero.hug(anotherHero);
aHero.hug(anotherHero);
console.log(aHero);


class Cat {
    constructor(plays, sleeps) {
        this.plays = 10;
        this.sleeps = 5;
    }
    playTime(catTime) {
        catTime.playHours(this.sleeps);
    }
    playHours(sleepHours) {
        this.plays -= sleepHours;
        console.log(`The cat usually sleeps for 10 hours but he slept for ${this.sleeps} because he played ${this.plays} hours`)
    }
}

const aCat = new Cat();
const timeCat = new Cat();
// aCat.playTime(timeCat);
aCat.playTime(timeCat);
console.log(aCat);


class Student {
    constructor(study, cry) {
        this.study=4;
        this.cry=1;
    }
    breakDown(theStudent) {
        theStudent.studyTime(this.cry);
    }
    studyTime(learnTime) {
        this.study -= learnTime;
        console.log(`The student had 4 hours to study, but cried for ${this.cry} and could only study for ${this.study} hours`)
    }
}

const aStudent = new Student();
const allotedTime = new Student();
// aStudent.breakDown(allotedTime);
aStudent.breakDown(allotedTime);
console.log(aStudent);

class Car {
    constructor(money, gas) {
        this.money=60;
        this.gas=40;
    }
    theGas(theCar) {
        theCar.gasUsed(this.gas);
    }
    gasUsed(milesDriven) {
        this.money -= milesDriven;
        console.log(`I had $60 dollars but I bought $${this.gas} worth of gas and now have $${this.money}.`)
    }
}

const aCar = new Car();
const driving = new Car();
aCar.theGas(driving);
console.log(aCar);