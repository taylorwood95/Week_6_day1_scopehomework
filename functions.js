function square(number){
    return number * number;
}

// console.log(square(5));

const totalNumbers = function(numbers){
    let total = 0
    for (const number of numbers){
        total += number
    };
     return total;
}

const myNumbers = [1,2,3,4,5]

// console.log(totalNumbers(myNumbers))

// Declare a function that takes input of a number and an array and returns true if the array contains that number and false if it doesn't

const array = function(number, list){
    for (const num of list){
        if(num === number){
            return true;
        }
    }
    return false;
}


// console.log(array(3, myNumbers))


// Define a function expression that takes two arguments:

// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for example, 'name'

// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. 


const keyCheck = function(object, string){
    for(const key in object){
            if (key === string){
            return true;
        }
    return false;
    }
}
const names = 'Taylor'
const dict = { name: 'Wojtek', age: 30 }


console.log(keyCheck(dict, 'name'))

