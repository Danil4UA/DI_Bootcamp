// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// will be empety spaces bcz we need to emethise this object
// output: it correctly displays the data from the object

// Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    //destructuring
    const fullName = Object.values(objUser).join(" ");
    return `Your full name is ${fullName}`
}

displayStudentInfo({first: 'Elie', last:'Schoppik'})

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

// Exercise 3: User & Id
// Instructions
// Using this object 

const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

function turnIntoArray(obj){
    //turning the users object into an array
    const arr = Object.entries(obj)

    // Modifying the outcome of part 1, by multipling the user’s ID by 2.
    for(key in obj){
        obj[key] = obj[key] * 2
    }
    return [arr, obj]
}

turnIntoArray(users)

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// type should be Object. even thu we say its a persone but globally its object

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1

// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
//not succesfullt because we didnt refer to out parent class (super(name))


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// should be succeful 

  // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
// we didn't indicate the name 


  // 4
// /
// we didt call super(). unseccsfull

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}

console.log([2] === [2])
//false
console.log({} === {})
//false

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
// number is 4. its a refference to obj 1
console.log(object3.number)
//number is 4. its a refference to obj 1
console.log(object4.number)
//number is 5


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Animal {
    constructor(name, type, color){
        this.name = name,
        this.type = type,
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    makeSound(sound) {
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`;
    }
}

const animal1 = new Mamal("lily", "cow", "brown");
console.log(animal1);
console.log(animal1.makeSound("Mooo"));
