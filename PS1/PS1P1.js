// Chenjie(Lavi) Zhao lavizhao@bu.edu U89663468
 // split the string into to array first and sort all charaters before joining them back into a string
const sortLetters = (word) => word.split('').sort().join('');
let word = 'supercalifragilisticexpialidocious';
console.log(`${word} = ${sortLetters(word)}`);
