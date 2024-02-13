import React from 'react';
import { createRoot } from 'react-dom';
import '../src/index.css';
import Heading from './Heading';
import List from './List';
import Greeting from './Greeting';
import Maths from './Maths';

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <Heading />
    <Greeting />
    <Maths />
    <List />
  </div>
);
