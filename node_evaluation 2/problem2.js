//Question 2 write a js program to remove duplicates from an array
var arr1 = ["abc","b","abc","d","Abc"];

console.log(removeDuplicates(arr1)); //output ["abc","b","d"]

function removeDuplicates(arr){
    for( let i in arr){
        for(let j in arr){
            if(arr[i].toLowerCase()==arr[j].toLowerCase() && i!=j){
                arr.splice(j,1);
            }
        }
    }
    return arr;  //return array from set 
}
