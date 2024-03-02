import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

var numbers = [3, 51, 7, 48, 9];


//////   MAP   /////////

// function double(x) {
//     return x*2;
// }

// var newnumbers = numbers.map(double);

// OR //

// var newnumbers = [];

// function double(x) {
//     newnumbers.push(x*2);
// }

// numbers.forEach(double);

//  OR  //

const mapnumbers = numbers.map(function (x) {
    return x * 2;
});  // Best

console.log(mapnumbers);

//////////////  FILTER     ////////////////

const filtered = numbers.filter(function (num) {
    return num < 10;
})

console.log(filtered);

// OR // 

// const filtered = [];

// numbers.forEach(function (num) {
//     if (num < 9) {
//         filtered.push(num);
//     }
// })

// console.log(filtered);

////////////// REDUCE ///////////////

// var newnumber = 0;

// numbers.forEach(function (currentNumber) {

//     newnumber += 2*currentNumber;
// })

var newnumber = numbers.reduce(function (accumulator, currentNumber) {
    console.log(`accumulator = ${accumulator}`);
    console.log(`currentNumber = ${currentNumber}`);
    return accumulator + currentNumber;
})

console.log(newnumber);

////////////    FIND   //////////

const found = numbers.find(function (num) {
    return num > 5 && num < 20
})

console.log(found);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals();
