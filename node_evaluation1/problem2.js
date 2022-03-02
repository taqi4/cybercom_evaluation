var  array1= [1, 3, 6, 4, 1, 2] ; //test case 1
console.log(findAbsentMin(array1));

var array2 =[1,2,3]; //test case 2
console.log(findAbsentMin(array2));

var array3 = [-1,-3]; //test case 3
console.log(findAbsentMin(array3));

function findAbsentMin(array){
    let minimum = Math.min(...array);
    minimum = minimum>0 ? minimum : 0; //if minimum is negative then it will be replaced by 0
    let absentMinimum = minimum +1 ; //initializing  absent minimum 
    let found = false;//flag for loop convineince

    while(!found){
        if(array.includes(absentMinimum)){
            absentMinimum++;  //if absent minimum we supposed is present in array then we suppose next number as absent minimum
        }else{
            found = true;
        }
    }
return absentMinimum ;
}