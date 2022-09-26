function greeting(name) {
    return `Hello, ${name}!`
}

//greeting("Kevin")

//let greet = greeting("Kevin")
//console.log(greet)

// const square = function (number) {
//    return number * number
//}

// let result = square(3)
// console.log(result)

(function () {
    console.log("Function is running")
})();

(function (name) {
    console.log(`Hello ${name}!`)
})("Kevin");

const todo = {
    add: function (){
        console.log("Add todo....")
    },
    edit: function (){
        console.log("Edit todo....")
    },
    delete: function (){
        console.log("Delete todo....")
    }
}

todo.add()
todo.delete()
todo.edit()