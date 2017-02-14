'use strict';

const main = require('./layouts/frontend');

module.exports = (state, { obj }) => main(`
  <h1>Welcome ${state.welcome}</h1>

  <!-- Add your site or application content here -->
  <p>Hello world! This is HTML5 Boilerplate.</p>

  <p>Numeric addition test: ${state.num} * ${state.num} = ${state.num * state.num}</p>

  <p>Loop test:</p>
  <ul>
    ${loop('<li>Number ', state.array, '</li>')}
  </ul>

  <p>if/else:</p>
  <p>${state.welcome.length === 4 ? '4!' : 'NOT 4!'}</p>

  <p>Full object: ${JSON.stringify(state, null, 4)}</p>
`,
{ obj });
