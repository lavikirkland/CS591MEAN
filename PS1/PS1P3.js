// Chenjie(Lavi) Zhao lavizhao@bu.edu U89663468
const stringOps = (word, func) => func(word);
let word = 'supercalifragilisticexpialidocious';
let func1 = stringOps(word, 
    word => {
        let list = word.split('c'); // split the word first with delimiter 'c'
        // convert the string array into desire format by adding back the 'c' to correct entries of the array
        for (i = 1; i < list.length; i++) {
            list[i] = 'c' + list[i];
        }
        if (list[0] === '') list.shift();
        return list;
    });
console.log(func1);
let func2 = stringOps(word, 
    word => {
        let mod = word.split(''); // have to convert string to array first to have access for modifying the string
        let count = 0;
        // iterates through the whole string array to find letter 'a' and convert them into uppercase 'A'
        for (i = 0; i < mod.length; i++) {
            if (mod[i] === 'a'){
                mod[i] = 'A';
                count++;
            }
        }
        // returns an object
        return {originalString: word, modifiedString: mod.join(''), numberReplaced: count, length: word.length};
    });
console.log(func2);