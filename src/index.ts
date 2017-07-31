// Include custom styles into the script to be injected into web pages.
// Remove this line to reduce script output size if you do not need styles.
import './index.css';
import * as $ from 'jquery'; // This is a dev only dependency. The UserScript imports these with @require meta headers.

const who = 'world';
console.log(`Hello ${who}!`);
