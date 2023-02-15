import express from 'express';

const app = express()

// checkout middleware for this routes
app.use(logger)

app.get('/', (req, res) => {
	res.send('hello world!!')
})

app.get('/home', (req, res) => {
	res.send('hello Home!!')
})

app.get('/about', (req, res) => {
	res.send('hello About!!')
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


// middleware create
function logger(req, res, next) {
	console.log('test middleware create')
	next()
}



export default app;