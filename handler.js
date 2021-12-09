'use strict';

module.exports.hello = async (event) => {

  if(event.queryStringParameters && event.queryStringParameters.name){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello '+event.queryStringParameters.name+ ' welcome to our first api!',
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
