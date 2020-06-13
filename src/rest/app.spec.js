const {initTest} = require('../utils_test.js');

let checkApiResponse;

beforeEach(async ()  => {
  return initTest()
	.then(client => {
		checkApiResponse = client
	})
});


test('ping endpoint return success', async () => {
  const current_request = {
	  	url:"http://localhost:3000/ping", 
		method: "GET"  
	}

  	await checkApiResponse(current_request, {
		success:true
	}) 
});