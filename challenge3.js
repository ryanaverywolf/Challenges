/* Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
Example:
Input:
originalObject = {
 age: 19,
 name: 'Luke Skywalker',
 eyeColor: 'blue',
 isJedi: true
};
Output:
newObject = {
 19: 'age',
 'Luke Skywalker': 'name',
 blue: 'eyeColor',
 true: 'isJedi'
}; */

 let person = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true,
    I_do: "Sound Like Yoda,"
 };

console.log(person)
console.log(person.toString()) //returns object Object
console.log(person.length)//returns undefined
console.log(person instanceof Array); // returns false
   if(Array = true) {
       console.log(person.reverse) //returns undefined
     }
//    console.log(keys(person))  causes an error
// WHAT ARE THE PROPERTIES CALLED!!!!  spent hours trying to find out to begin a formulation.
//Not property/properties/prop/key/keys/etc./etc.
//this is my biggest hang-up, not knowing what to call things and what functions are available.  Here is a the simplest solution I found. 

let newData = Object.keys(person).reduce(function(obj,key){
    obj[person[key]] = key;
    return obj;
},{});
console.log(newData)

//newData is the new variable
//Object is a constant function in js
//keys refers to the properties but I couldn't get this to work elsewhere
//person is the let variable
//reduce is a callback function in js and acts on the elements in the array 'person' and loops until the array has been parsed
//(function(obj,key) defines the parameters for the the immediately prior function to act on
//obj[person[key]] = key , dictates to return the object of the person as the key (essentially reversing spots)
// return obj returns the data from the line above
//console.log(newData) outputs the newly reversed data