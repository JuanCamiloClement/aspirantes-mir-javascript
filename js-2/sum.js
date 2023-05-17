function sum(array){
    let sumOfArray = 0;
    for (let indexOfCurrentElement = 0; indexOfCurrentElement < array.length; indexOfCurrentElement ++) {
         let currentElement = array[indexOfCurrentElement];
         sumOfArray = sumOfArray + currentElement;
    }
    return sumOfArray
}

console.log("EJERCICIO 1")
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

function max(array){
    let maxElement = array[0];
    for (index = 0; index < array.length; index ++){
         let currentElement = array[index];
         if (currentElement > maxElement){
             maxElement = currentElement;
         }
    } 
    return maxElement;
}

console.log("EJERCICIO 2")
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 17, 6, 5, 4])) // 10
console.log(max([])) // undefined

function maxIndex(array){
    let n = -1;
    let maxElement = -Infinity;
    for (index = 0; index < array.length; index ++){
         let currentElement = array[index];
         if (currentElement > maxElement){
             maxElement = currentElement;
             n = index;
         }
    } 
    return n;
}

console.log("EJERCICIO 3")
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

function join(array){
    let elements = "";
    for (let index = 0; index < array.length; index ++){
        let otherElement = array[index];
        elements = elements + " " + otherElement;
    }
    return elements;
}

console.log("EJERCICIO 4")
console.log(join([1,2,3,4]))
console.log(join(["Hola","Mundo"]))
console.log(join([23,645,243,24,1]))