// remove all spaces and non letter characters and spaces
// make all letters lowercase
// set length to a variable to be able to check it
// 

function palindrome(string){
    var word = string.toLowerCase().replace(/[^A-Za-z0-9]+/g,'');
    var leng = 0;
    if(word==="") {
        console.log("Nothing Found");
        return false;
        }
    if((word.length) % 2 === 0) {
        leng = (word.length) / 2;
    } else {

        if (word.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
          
            leng = (word.length - 1) / 2;
        }
    }

    for (var x = 0; x < leng; x++) {
       
        if (word[x] != word.slice(-1-x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}

palindrome("a man, a plan, a canal: panama");


