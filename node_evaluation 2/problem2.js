//Question 2 write a js program to remove duplicates from an array
var arr1 = ["abc","b","abc","d","Abc"];

console.log(removeDuplicates(arr1)); //output ["abc","b","d","Abc"]

function removeDuplicates(arr){
    var s = new Set() // create a set to store unique elements
    for( let i in arr){
        s.add(arr[i]); //add unique elements to set
    }
    return Array.from(s);  //return array from set 
}
