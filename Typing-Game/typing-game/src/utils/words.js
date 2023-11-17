import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';



export const generate = (count = 40 ) => { // setting the default number of words to 40

    // creating an array with size of 40
    return new Array(count).fill() //filling the array
    .map(_=> faker.random.word()) //that maps words from the function faker.random.word()
    .join(' ');// and joins the words with space
};