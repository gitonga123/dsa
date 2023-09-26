class Person {
    constructor(initialAge) {
        this.age = initialAge >= 0 ? initialAge : 0;

        if (this.age == 0) {
            console.log("Age is not valid, setting age to 0");
        }
    }

    amIOld() {
        if (this.age < 13) {
            console.log('You are young.');
        }
        else if (this.age >= 13 && this.age < 18) {
            console.log('You are a teenager.');
        } else {
            console.log('You are old')
        }
    }

    yearPasses() {
        this.age = this.age + 1;
    }


}

