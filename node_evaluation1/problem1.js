var list1 = [10, 20, 60, 30, 54, 39];//test cases 1
console.log(sum(list1));//output 213

var list2 = [10, 20, 60, 30, "54", "39"] // test case 2 
console.log(sum(list2));//output 213  added "54" and "39" as number

var list3 = ["a", null, , 30, 54, 39] //test case 3
console.log(sum(list3));//output 123 ignored null umdefined and "a"

function sum (list){
    let sum=0;
    list.forEach(element => {
        // it will ignore strings null and undefined values but will accept a number as string for eg : "39"
        //in case of a string, null, undefined Number(element ) will reuturn false but wiil return true for "39" and integers
        if(Number(element) ){
            sum+=Number(element);
        }
    });
    return sum;
}