                        //  QUESTION 1.......
//                         1. Double using callback.
// Write a function that takes in an array of integers and a callback function, 
// and returns a new array where each
// element is doubled using the callback.

/* function doubleArray(arr,callback){
    const doubledArr = arr.map((num) => {
return callback(num);
    });
    return doubledArr;
}

const originalArray = [1,2,3,4,];

function callback(num){
    return num * 2;

}

const doubledArray = doubleArray(originalArray,callback);
console.log(doubleArray); */


                    //  QUESTION 2.......
              /*       2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
with the manipulated string or the new string to the console. */

/* function manipulateString(inputString, callback){
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString);
}

function logString(manipulatedString){
console.log(`The manipulated string is: ${manipilatedString}`);
}

manipulateString("hello,world!", logString); */

       



                    //   QUESTION 3......
/* const person = {  
    firstName: "Mithun", lastName: "S",
age: 20,
};
function ageInDays (personObject, callback) {
const fullName = `${personObject.firstName} ${personObject.lastName}`; const ageInDays = personObject.age * 365;
callback(fullName, ageInDays);
}
function logResult(fullName, ageInDays) {
     console.log(
`The person's full name is ${fullName} and their age in days is
${ageInDays}.`
);
}
// Expected Output.
ageInDays (person, logResult); // The person's full name is Mithun S and their age in days is 7300. */





                       // QUESTIONS 4......

                      /*  4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order. */
/* 
const books =[
{
    title: "The Great gatsby",
    author:"F.Scott Fitzgerald",
    year: 1925,
},
{
    title: "To kill a mockingbird",
    author:"Harper Lee",
    year: 1960,
},
{
    
    title: "Who are You?",
    author:"George orwell",
    year:1949,
},

{
    
    title: "Pride and Prejudice",
    author:"Jane Ausren",
    year:1813,
},
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(" , "));
}
function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);

}

extractTitles(books,logTitles); */






                                //   QUESTIONS 5.........

                              /*   5. Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting
message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!". */
/* function greet(name){
return new Promise((resolve)=>{
    const greeting = `Hello, ${name}!`;
    resolve(greeting);
});
}

greet ("Guddu Bhaiya").then((message)=> console.log(message)); */





                        //  QUESTION 6...
                        /* 6. Fetch results asynchronously.
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
 */
/* 
async function fetchData(){
const response = await
fetch("https://jsonplaceholder.typicode.com/todos/1");
const data  = await response.json();
console.log(data);
}

fetchData();
 */




              /*               //    QUESTIONS 7.....

                        7. Multiple requests.
   Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from
 both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs. */



/* async function getCombinedData(){
    const  [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)
    =>
    response.json()
    ),

    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)
    =>
    response.json()
    ),

    ]);
    const combinedData = {
        todo: data1,
        post: data2,
    };
    return combinedData;
}
getCombinedData().then((data)=> console.log(data));
 */







                    //QUESTIONS8........

               /*      8. Get Data from API and Display it on the browser console.
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
of posts, and then display them to the browser console. */
