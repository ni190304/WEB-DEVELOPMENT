import React from 'react';

const curr_date = new Date();
const currentTime = curr_date.getHours();

let greeting;

const customstyle2 = {
  color: ""
} 

if (currentTime >= 4 && currentTime < 12) {
  greeting = "Good morning";
  customstyle2.color = "red"
}
else if (currentTime >= 12 && currentTime < 15) {
  greeting = "Good afternoon";
  customstyle2.color = "yellow"
}
else if (currentTime >= 15 && currentTime < 18) {
  greeting = "Good evening";
  customstyle2.color = "green"
}
else{
  greeting = "Good night";
  customstyle2.color = "blue"
}

function Greeting() {
    return <h2 style={customstyle2}>{greeting}</h2>
}

export default Greeting;