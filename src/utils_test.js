const axiosist = require("axiosist");
const { createApp } = require("./rest/app.js");

const initTest = async () => {
  const app = await createApp();
  // const checkApiResponse =
  // return checkApiResponse => checkApiResponse
  // return (req) => { return axiosist(app)(req) }
  const axios = async (req) => {
    return axiosist(app)(req);
  };

  return async (currentRequest, data, status) => {
    // const {data, status} = expected_response

    const assertResponse = {
      data: expect.objectContaining(data),
    };

    if (typeof status === "number") {
      assertResponse.status = status;
    }

    const response = await axios(currentRequest);
    const subresponse = {
      data: response.data,
      status: response.status,
    };

    expect(subresponse).toEqual(expect.objectContaining(assertResponse));
  };
};

// const buildRequest = (app) => (req) => {
//   if(false){
//     return axios(req)
//       .then(res => {
//         return res
//       })
//   } else {
//     return
// 		.then(app => axiosist(app)(req))
//       	.then(res => {
//         	return res
//       	})
//   }
// }

module.exports = {
  initTest,
};
