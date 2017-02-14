'use strict';

const loop = (elem1, obj, elem2) => {
  //console.log(args);
  let results = '';
  try {
    for (let i = 0; i < obj.length; i += 1) {
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

module.exports = loop;
