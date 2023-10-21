import inquirer from "inquirer";

type sentenceType={
    sentence:string
}
let answers:sentenceType = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter a sentence to count the word"
    }
])

let count =answers.sentence.trim().split(' ');
console.log(`The total of word count of your provided sentence is: ${count.length}`);
