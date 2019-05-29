// Chenjie(Lavi) Zhao lavizhao@bu.edu U89663468
// generator to get fibonacci numbers starting from 0
function* fibs() {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1;
        val1 = val2;
        val2 = result + val1;
        yield result;
    }
}

// generator to get even fibonacci numbers
function* evenFibs() {
    regFibs = fibs();
    while (true) {
        let fib = regFibs.next().value;
        if (fib % 2 == 0) yield fib;
    }
}

/* USE FOR DEBUG
//Get a few fibs
myFibs = fibs();
let count = 20;
while (count --> 0) {
    console.log(myFibs.next().value);
}*/

//Get the first 5 even fibs
let even = evenFibs();
for (let i = 0; i < 5; i++) console.log(even.next().value);