"use strict";

const AWS = require('aws-sdk')

const getUserById = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const { id } =  event.pathParameters;   // Get id from path params

  let user;
  let statusCode = 200;
  let body;
  try {
    const result = await dynamoDB.get({TableName: 'User', Key: { id }}).promise();  // Retrieve user from db

    user = result.Item;

    // Prepare response
    if (user) {
      body = JSON.stringify(user);
    } else {
      statusCode = 404;
      body = JSON.stringify({ message: "User does not exist" });
    }
  } catch (error) {
    // Error handling
    statusCode = 500;
    body = JSON.stringify({ message: 'Error while fetching user from database' });
  }

  return { statusCode, body };   // Return prepared response
};

module.exports = {
  handler: getUserById
}
