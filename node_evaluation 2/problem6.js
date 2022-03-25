//Write a function named randomOp that randomly returns either "+", "-", "*", or "/".

console.log(randomOp());
console.log(randomOp());
console.log(randomOp());

function randomOp(){
    let operators = ['+','-','*','/'];
    return operators[Math.floor(Math.random()*4)]; //return random operator
}