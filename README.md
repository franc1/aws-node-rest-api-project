<!--
title: 'AWS-NODE-REST-API-PROJECT'
description: 'This template demonstrates how to make a simple REST API with Node.js running on AWS Lambda, API Gateway and DynamoDB using the traditional Serverless Framework. API contains 2 endpoints: createUser and getUserById.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
priority: 1
authorName: 'Fran Camaj'
-->

# Serverless Framework Node REST API on AWS

This template demonstrates how to make a simple REST API with Node.js running on AWS Lambda, API Gateway and DynamoDB using the traditional Serverless Framework. API contains 2 endpoints: createUser and getUserById.

## Usage

### Deployment

```
$ serverless login
$ serverless deploy
```

### Invocation

After successful deployment, you can call the created application via HTTP (getUserById):

```bash
curl https://xxxxxxx.execute-api.eu-central-1.amazonaws.com/dev/user/{id}
```

Which should result in response body similar to the following:

```json
{
  "id": "70701ffe-ddaf-4bb1-915f-1e74de9f4c24",
  "createdAt": "2021-09-08T11:12:01.654Z",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john_doe@local.com",
  "phone": "+38269123456",
  "address": "Podgorica, Montenegro"
}
```
