import { v4 as uuidv4 } from "uuid";
import dedent from "dedent";

const beginner = [
  {
    id: uuidv4(),
    level: 'beginner',
    title: 'Find the Longest Word in a String',
    question: 'Create a function that returns the number of the longest word in a string passed in as parameter',
    pseudocode: ['Split the sentence', 'Create a variable', 'Iterate through the array', 'Save the longest word in the variable', 'Return the longest word'],
    solutions: [
      dedent`
      const longestWord = (str) => {
        const words = str.split(' ');
        let maxLength = 0;
        for (let i = 0; i < words.length; i++) {
          if (word[i].length > maxlength) {
            maxLength = words[i].length;
          }
        }
      };
      `,
     dedent `
      const longestString = (str) => {
        return str.split(' ').reduce((total, curr) => {
          return Math.max(total, curr.length)
        }, 0);
      };
      `
    ]
  },
  {
    id: uuidv4(),
    level: 'beginner',
    title: 'Reverse a String',
    question: 'Create a function that returns the number of the longest word in a sentence passed as parameter',
    pseudocode: ['split the sentence', 'create a variable', 'iterate through the array', 'save the longest word in the variable', 'return the longest work'],
    solutions: [
      dedent`
      const longestWord = (words) => {
        const wordArray = words.split();
        const longestWord = wordArray.reduce((acc, curr) => {
          if (curr.length > acc) {
            return acc = curr.length;
          }
        }, 0);
      };
      `
    ]
  },
  {
    id: uuidv4(),
    level: 'beginner',
    title: 'Factorize a Number',
    question: 'Create a function that returns the number of the longest word in a sentence passed as parameter',
    pseudocode: ['split the sentence', 'create a variable', 'iterate through the array', 'save the longest word in the variable', 'return the longest work'],
    solutions: [
      dedent`
      const longestWord = (words) => {
        const wordArray = words.split();
        const longestWord = wordArray.reduce((acc, curr) => {
          if (curr.length > acc) {
            return acc = curr.length;
          }
        }, 0);
      };
      `
    ]
  }
]

export default beginner;
