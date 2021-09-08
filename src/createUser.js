"use strict";

const { v4 } = require("uuid");
const AWS = require('aws-sdk')

const createUser = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const { firstName, lastName, email, phone, address } = JSON.parse(event.body);   // Get body fields

  const createdAt = new Date().toISOString();
  const id = v4();  // generate id

  const user = { id, createdAt, firstName, lastName, email, phone, address };


  let statusCode = 201;
  let body;
  try {
    await dynamoDB.put({TableName: 'User', Item: user}).promise();  // Save user in db
    
    body = JSON.stringify(user);  // Prepare response
  } catch(error) {
    // Error handling
    statusCode = 500;
    body = JSON.stringify({ message: 'Error while saving user on database' });
  }

  return { statusCode, body };    // Return prepared response
};

module.exports = {
  handler: createUser
}
