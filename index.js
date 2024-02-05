// Random Quote Application
const quotations = [ 
    "First Quote.",
    "Second Quote.",
    "Third Quote."
]

let random = Math.floor(Math.random()*quotations.length);
let chosen = quotations[random];
console.log(chosen);