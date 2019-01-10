//Are the characters in this string unique?
//Divide the problem - parse out each character - compare each against each other - return value "unique" or "not unique"
// Start with what you know - parse out the characters. A forInLoop will give me the index.
//split() splits into array of each character  

// function () {
// }

// var sum = 0

// for (var i = 1; i <= 50; i++) {
//   sum += i
// }

// var episode = 10;

// if(episode == 10){
//     console.log("I am so sad that the season is ending.");
// }

//Answer from Adam

// let x = "String";
// let y = "racecar";

// let check =(checking) => {
//     let broken = checking.split("");
//     for (item of broken) {
//         console.log(item);
//     }
// }

// check(y);

//could also write

// let x = "String";
// let y = "racecar";

// let check =(checking) => {
//    // let broken = checking.split("");
//     for (item of checking.split("")) {
//         console.log(item);
//     }
// }

// check(y);

let x = "String";
let y = "racecar";

let check =(checking) => {
    let broken = checking.split("");
    for (item of broken) {
    for (item2 of broken) {
            console.log(item, item2);
            if (broken[item] +++ broken[item2]) {
            console.log("Not Unique");
            }
        }
    }
}

check(y);

