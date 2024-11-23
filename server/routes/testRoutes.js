import express from 'express';

const app = express()

// checkout middleware for this routes
app.use(logger)

app.use((req, res) => {
	res.status(404).send('Page not found');
  });

app.get('/', (req, res) => {
	res.send('hello world!!')
})

// routes name same but action are different
app.route('/city')
	.get((req, res) => {
		res.send('get a random city')
	})

	.post((req, res) => {
		res.send('Add new city')
	})

	.put((req, res) => {
		res.send('update the city')
	})

app.get('/user/:id', logMiddleware, (req, res) => {
	const userId = req.params.id;
	res.send(`User ID is ${userId}`);
	});



// middleware for this routes
function logger(req, res, next) {
	console.log('test middleware create')
	next()
}

// middleware for specific routes
function logMiddleware (req, res, next) {
	console.log(`Request to ${req.url}`);
	next();
  };



export default app;