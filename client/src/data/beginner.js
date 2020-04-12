import { v4 as uuidv4 } from "uuid";

const beginner = [
  {
    id: uuidv4(),
    level: 'beginner',
    title: 'Find the Longest Word in a String',
    question: 'create a function that returns the number of the longest word in a sentence passed as parameter',
    pseudocode: ['split the sentence', 'create a variable', 'iterate through the array', 'save the longest word in the variable', 'return the longest work'],
    solutions: [
      `
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
    title: 'Reverse a String',
    question: 'create a function that returns the number of the longest word in a sentence passed as parameter',
    pseudocode: ['split the sentence', 'create a variable', 'iterate through the array', 'save the longest word in the variable', 'return the longest work'],
    solutions: [
      `
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
    question: 'create a function that returns the number of the longest word in a sentence passed as parameter',
    pseudocode: ['split the sentence', 'create a variable', 'iterate through the array', 'save the longest word in the variable', 'return the longest work'],
    solutions: [
      `
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
