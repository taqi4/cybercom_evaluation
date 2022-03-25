//Question5 :Write a function named “returnMyAns”, that takes three arguments: two operands and an operator and returns a string with the question “What is [oprd1] [opr] [oprd2]?”.

returnMyAns (5, 7, '+'); // 12
returnMyAns (8, 2, '*'); // 16
returnMyAns (8, 2, '-');// 6

function returnMyAns(oprd1,oprd2,operator){
    console.log(eval(`${oprd1} ${operator} ${oprd2}`));
}
