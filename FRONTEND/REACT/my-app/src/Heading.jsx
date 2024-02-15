import React from 'react';
// import PI, { doublePi, triplePi } from './Pi';
import * as pi from './Pi';
import * as calc from './Calc';

console.log(pi);



function Heading() {
    return (
        <div>
            <h1 style={{ color: "blue" }}>Hello</h1>
            <ul>
                <li>{calc.add(1,2)}</li>
                <li>{calc.subtract(4,2)}</li>
                <li>{calc.multiply(12,9)}</li>
                <li>{calc.divide(12,9)}</li>
            </ul>
        </div>
    )
}

export default Heading;