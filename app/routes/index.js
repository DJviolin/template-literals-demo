const Router = require('koa-router');
const router = new Router();
//const router = new Router({ prefix: '/hello' })

// Viewing
const index = require('../views/index');

// http://127.0.0.1:3000/
router.get('/', (ctx) => {
	/*ctx.state = {
		//session: this.session,
		title: 'app',
	};
	await ctx.render('index', {
		//title: 'Koa',
	});*/

	ctx.body = index({
		welcome: 'Welcome',
		foo: 'bar',
		num: 2,
		num1: 2,
		num2: 3,
	}, {
	obj: {
		title: 'Template Literals',
		description: 'Vanilla JS rendering',
	} });

});

// http://127.0.0.1:3000/hello/lanti?num=123
/*router.get('/hello/:id', async (ctx) => {
	ctx.state = {
		//session: this.session,
		title: ctx.params.id,
		number: ctx.query.num,
	};
	ctx.body = await { hello: ctx.state.title, querystring: ctx.state.number };
	//ctx.body = 'Hello, World!';
});*/

module.exports = router;
