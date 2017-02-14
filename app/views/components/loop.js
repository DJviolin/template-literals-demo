'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// https://rainsoft.io/how-three-dots-changed-javascript/

// Proper module handling with type checking
// https://gist.github.com/AoJ/547bc678347c18a4051c#file-fibonacci-js

/*
${Array(5).join(0).split(0).map((item, i) => `
  <div>I am item number ${i}.</div>
`).join('')}
*/

//console.time('benchmark');

//const loop = (elem, obj) => {
const loop = (elem1, obj, elem2) => {
  //console.log(args);
  let results = '';
  //const split = elem.split(/<<>>/); // '<li>Number <<>></li>'
  //console.log(split);
  try {
    for (let i = 0; i < obj.length; i += 1) {
      //results += `${split[0]}${obj[i]}${split[1]}\n`;
      results += `${elem1}${obj[i]}${elem2}\n`;
    }
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      results = `
        <span style="color: #f00; font-weight: bold; font-style: italic;">
          Render error:<br />
          ${err}<br />
        </span>
      `;
    } else {
      results = '';
    }
  }
  return results;
};

//loop('<li>Number <<>></li>\n', [6, 7, 8])
//loop('<li>Number ', [6, 7, 8], '</li>')

//console.timeEnd('benchmark');

module.exports = loop;
