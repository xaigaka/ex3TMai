// Used Murray's video for assistance while coding this
// 3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];
function flattening(list){
    let flattened = list.reduce(
    // Callback function parameter
        (temp, current) => {
        return temp.concat(current);
    }
    // Empty Initial Value/Array
    ,[]);
    console.log("3-1. flattening(list)")
    console.log(flattened);
}
flattening(arrays);
// → [1, 2, 3, 4, 5, 6]

// 3-2. loop(value, test, update, body)
export function loop(value, test, update, body) {
    while (test(value)) {
        console.log("Current Value: " + value);
        console.log("Calling body");
        body(value);
        value = update(value);
    }
}
console.log("3-2. loop(value, test, update, body)")
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// 3-3. everyLoop(array, test)
// 3-4. everySome(array, test)
export function everyLoop(array, test) {
    let currentResult = true;
    for(let item of array){
        currentResult = currentResult && test(item)
    }
    return currentResult
}

export function everySome(array, test) {
    return !array.some((value)=>!test(value))
} 

console.log("3-3. everyLoop(array, test)")
console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

console.log("3-4. everySome(array, test)")
// Returns the same boolean results
console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10)); 
console.log(everySome([], n => n < 10));