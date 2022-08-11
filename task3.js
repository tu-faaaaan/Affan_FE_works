// 1.Remove duplicates of the array and return an array of only unique elements
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let unique=[...new Set(array)];
console.log(unique)

// 2.Find the intersection of two arrays. (An intersection would be the common elements that exist within both arrays). The elements should be unique!
const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
var commonValues = _.intersection(firstArray, secondArray);
console.log(commonValues)

// 3.Remove empty values from the array.
const array1 = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,]
var filtered = array1.filter(function (el) {
    return el != null;
});
console.log(filtered);

// 4.Write a JavaScript program to display whether the player is retired (i.e. display player name, nationality, and playing status) of the following players.
const cricket = [{
name: 'Sachin Tendulkar',
nationality: 'India',
retired: true
}, {
name: 'Shane Warne',
nationality: 'Australia',
retired: true
}, {
name: 'Virat Kohli',
nationality: 'India',
retired: false
}];
console.log(cricket.filter(function(e){return e.retired==true}))

// 5.	Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
function first(array,n){
    for (i=0;i<n;i++){
        if (n>0){
            return array.slice(0,n);}
    }
}
console.log(first([7, 9, 0, -2],3))