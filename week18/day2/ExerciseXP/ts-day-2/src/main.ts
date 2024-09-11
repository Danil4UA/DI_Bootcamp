// Instructions:
// Create a class Employee with the following properties:

// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.

class Employee {
  constructor( 
    private name: string, 
    private salary: number, 
    public position: string, 
    protected department: string
  ){}
  getEmployeeInfo(): string{
    return `name: ${this.name}, position: ${this.position}`
  }
}

// Create a class Product with the following properties:

// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.



class Product {
  static count: number = 0;
  constructor(
    readonly id: number,
    public name: string,
    public price: number
  ){
    this.id = ++ Product.count
  }
  getProductInfo(): string{
    return `Product name: ${this.name}, price: ${this.price}`
  }
}


// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.

class Animal {
  constructor(
    public name: string
  ){}
  makeSound():string{
    return ``
  }
}

class Dog extends Animal {
  constructor(name: string){
    super(name)
  }
  makeSound():string{
    return `bark`
  }
}

let dog1 = new Dog("Sharik")
console.log(dog1.makeSound())

// Instructions:
// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

class Calculator {
  constructor(
  
  ){}
  // with static now we can call it without an instance
  static add(a: number, b: number): number{
    return a + b
  };
  static subtract(a: number, b: number): number{
    return a - b
  }
}

console.log(
  Calculator.add(1, 5),
  Calculator.subtract(43,12)
)


// Create an interface User with properties id (readonly), name, and email.
//  Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel. 
// Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User {
  readonly id: number
  name: string
  email: string
}

interface PremiumUser extends User {
  membershipLevel?: number
}

const printUserDetails = (prmUser: PremiumUser): void => {
  console.log(`ID: ${prmUser.id}`);
  console.log(`Name: ${prmUser.name}`);
  console.log(`Email: ${prmUser.email}`);
  if (prmUser.membershipLevel !== undefined) {
    console.log(`Membership Level: ${prmUser.membershipLevel}`);
  } else {
    console.log(`Membership Level: Not specified`);
  }
};

const user1: PremiumUser = { id: 1, name: "John Doe", email: "john@example.com", membershipLevel: 3 };
printUserDetails(user1);
