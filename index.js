// if statement : run the code block only if condition is true
// if(condition){
//     // run this code block if condition is true 
// } else {
//     // run this code block if condition is false 
// }

// if(condition){

// } else if(condition){

// } else if (condition){

// } else {
//     // runs at the end when items are false 
// }
// store history of calculations in an array
const history_calculations = []  // step 1 create array 

function storeCalculations(a,b,operation,result){
    // create an object to represent the calculation 
    const calculation = {
        "a" : a,
        "b" : b,
        "operation" : operation,
        "result" : result
    }
    history_calculations.push(calculation) 
    console.log(history_calculations)
}

function calculate(a,b,operation){
    if(operation === '+'){
        let sum = a + b 
        storeCalculations(a,b,operation,sum)
        return sum 
    } else if(operation === '-'){
        let sub = a - b 
        storeCalculations(a,b,operation,sub)
        return sub 
    } else if(operation === '/' && b !== 0) {
        let division = a / b 
        storeCalculations(a,b,operation,division)
        return division
    } else if(operation === '*'){
        let multiply = a * b 
        storeCalculations(a,b,operation,multiply)
        return multiply
    } else {
        return 'Invalid Operation!!'
    }
}

calculate(10,2,"/")
calculate(10,10,"+")
calculate(10,5,"*")
calculate(10,5,"-")

