const {createApp} = require('./rest')
const logger = require('pino')()
const http = require('http');


createApp()
	.then(app => {
		http.createServer(app).listen(3000);
	})

