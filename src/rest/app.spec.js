const { initTest } = require("../utils_test.js");

let checkApiResponse;

beforeEach(async () => {
  return initTest().then((client) => {
    checkApiResponse = client;
  });
});

test("ping endpoint return success", async () => {
  const currentRequest = {
    url: "http://localhost:3000/ping",
    method: "GET",
  };

  await checkApiResponse(currentRequest, {
    success: true,
  });
});
