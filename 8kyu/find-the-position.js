// ****DESCRIPTION:****
//
// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"
//
// **Solution**
function position(letter){
    let str = ' abcdefghijklmnopqrstuvwxyz';
    return "Position of alphabet: " + str.indexOf(letter);
}