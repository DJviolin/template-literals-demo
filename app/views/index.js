const main = require('./layouts/frontend');

module.exports = (state, { obj }) => main(`
	<h1>${state.welcome}</h1>

	<!-- Add your site or application content here -->
	<p>Hello world! This is HTML5 Boilerplate.</p>

	<p>Numeric addition test: ${state.num1} + ${state.num2} = ${state.num1 + state.num2}</p>

	<p>Full object: ${JSON.stringify(state, null, 4)}</p>
`,
{ obj });
