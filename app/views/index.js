const main = require('./layouts/frontend');

module.exports = (state, { obj }) => main(`
<!-- Add your site or application content here -->
<p>Hello world! This is HTML5 Boilerplate.</p>

${JSON.stringify(state, null, 4)}

<p>Numeric addition: ${state.num1 + state.num2}</p>
`,
{ obj });
