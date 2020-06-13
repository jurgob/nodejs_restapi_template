const app = require('express')();
const OpenApiValidator = require('express-openapi-validator').OpenApiValidator;
const path = require('path');
const express = require('express');

const apiSpec = path.join(__dirname, './specs/openapi.specs.json');

app.use('/spec', express.static(apiSpec));

function createApp(){
	
	return new OpenApiValidator({
		apiSpec,
		validateRequests: true,
		validateResponses: true
	})
	.install(app)
	.then(() => {
		app.use('/ping', require('./ping'));

		app.use((err, req, res, next) => {
			// 7. Customize errors
			res.status(err.status || 500).json({
				message: err.message,
				errors: err.errors,
			});
		});

		return app;
	})
	
	

	// return Promise.resolve(app)
}


module.exports = {
	createApp
}