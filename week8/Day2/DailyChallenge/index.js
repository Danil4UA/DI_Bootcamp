let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = ()=> {
    groceries.fruits.forEach((element)=>console.log(element))
}

displayGroceries()

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.

const cloneGroceries = () => {
    let user = client;
    client = "Betty"
    // we not gonna have any ,modification in iser variable because we assigned a value before we chenge it. the changes will affect only the variable client.
    let shopping = groceries

    groceries.totalPrice = "35$"
    console.log(shopping)

    console.log(groceries)

    groceries.other.paid = false;
    console.log(groceries)
    console.log(shopping)

    // it also affects our initial and clone variable. 
    // Copying the groceries object to shopping creates a reference. Therefore, any changes to groceries will also reflect in shopping.
}


cloneGroceries()