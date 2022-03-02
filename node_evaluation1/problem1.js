var list = [10, 20, 60, 30, 54, 39];
console.log(sum(list));

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