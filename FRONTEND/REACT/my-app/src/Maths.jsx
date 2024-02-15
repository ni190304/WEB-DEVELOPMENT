import React from 'react';

const img = "https://picsum.photos/200";

const fname = "Nihaal";
const lname = "Nayak";

const curr_date = new Date();
const year = curr_date.getFullYear();

function Maths() {
    return (
        <div>
            <img className='food-img' src={img + "?grayscale"} alt="heyy" />
            <h1>Hello {`${fname} ${lname}`}</h1>
            <p>Your lucky number is {Math.floor(Math.random() * 3)}</p>
            <h2>Created by {fname} {lname}</h2>
            <p>Copyright {year}</p>
        </div>
    )
}

export default Maths;