let arr = [1,2,3,4,5,6,7,8,9,10];

let numbersEven = arr.filter (val => {
    return val % 2 === 0;
});

let numbersOdd = arr.filter (val => { 
    return val % 2 !== 0;
});

console.log(numbersEven)
console.log(numbersOdd)
