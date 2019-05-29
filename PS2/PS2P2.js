// Chenjie(Lavi) Zhao lavizhao@bu.edu U89663468
// generator that breaks down a sentence into words
function* sentenceBreak(sentence) {
    // split the sentence based on the whitespace
    words = sentence.split(' ');
    yield* words; // yield an iterable
}

// initialize the generator with a sentence
let wordGen = sentenceBreak('All I know is something like a bird within her sang');
for (let word of wordGen) console.log(word);