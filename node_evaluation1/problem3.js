var array1 = [1, 3, 4, 6, 8, 9]; //test case 1
console.log(seperateEvensOdds(array1)); //output 2 arrays

function seperateEvensOdds(array){
    let evens=[],odds=[];
    array.forEach(element => {
        if(element%2==0){//if element is even push it to evens array
            evens.push(element);
        }else{// else push to odds array
            odds.push(element);
        }
    });
    return [odds,evens]; //returns odds at index =0 and evens at indexx =1
}