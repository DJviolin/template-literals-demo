const Router = require('koa-router');
const router = new Router();
//const router = new Router({ prefix: '/hello' })

// Viewing
const index = require('../views/index');

// http://127.0.0.1:3000/
router.get('/', async (ctx) => {
	ctx.body = await index({
		welcome: 'User',
		num: 2,
	}, {
	obj: {
		title: 'Template Literals',
		description: 'Vanilla JS rendering',
	} });
});

// http://127.0.0.1:3000/hello/lanti?num=123
router.get('/hello/:id', async (ctx) => {
	ctx.state = {
		id: ctx.params.id,
		num: parseInt(ctx.query.num, 10),
	};
	ctx.body = await index({
		welcome: ctx.state.id,
		num: ctx.state.num,
	}, {
	obj: {
		title: 'Template Literals',
		description: 'Vanilla JS rendering',
	} });
});

module.exports = router;
