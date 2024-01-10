// ****DESCRIPTION:****
//
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//
// **Solution**
function removeExclamationMarks(s) {
    let str ='';
    for (let el of s ){
        if (el !== '!')str += el;
    }
    return str;
}