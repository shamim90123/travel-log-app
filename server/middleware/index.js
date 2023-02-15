export function logger(req, res, next) {
	console.log('application level middleware create')
	next()
}