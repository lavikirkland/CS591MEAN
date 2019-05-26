// Chenjie(Lavi) Zhao lavizhao@bu.edu U89663468
const evaluate = (expression) => {
    switch(expression[1]) {
        case '+'://Have to covert char to int first, otherwise concatenates two chars instead of adding them
            return expression => expression.charCodeAt(0) + expression.charCodeAt(2) - 48*2; 
            break;
        case '-':
            return expression => expression[0] - expression[2]; //Duck typing
            break;
        case '*':
            return expression => expression[0] * expression[2];
            break;
        case '/':
            return expression => expression[0] / expression[2];
            break;
    }
}
let list = ['4+2', '5*7', '6-1', '9/2'];
for (i = 0; i < list.length; i++) {
    let operator = evaluate(list[i]); //function evaluate() determines the function to use and saves it in operator variable
    console.log(`${list[i]} = ${operator(list[i])}`);
}
