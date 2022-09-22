/*
if(condition){
    // if statements
} else {
    // else statements
}


// == equal --> ===
// != not equal --> !==
*/

let personID;

if(typeof personID !== "undefined"){
    console.log("id not correct")
} else {
    console.log(`id is ${personID}`)
}

console.log(personID)

const name = "Kadi"
const age = 60

if(age > 0 && age <= 12){
    console.log(`${name} on laps`)
} else if(age > 12 && age < 18){
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on täiskasvanu`)
}


let id = 5
if(id === 100){
    console.log("Ok")
} else {
    console.log("Not")
}

// ? - ternary
console.log(id === 100 ? "Ok" : "Not")

// switch
const color = "red"

switch (color) {
    case "red":
        console.log("Stop!")
        break;

}