# API Documentation

Welcome to the documentation for the API. This API allows you to perform CRUD operations on a "person" resource. You can create, retrieve, update, and delete person records using this API.

# UML Diagram

Picture 1: shows the basic structure and overflow of the api.

Picture 2: shows the request and response formats of each operation made.

<p align="left">
<img src="https://raw.githubusercontent.com/Benrobo/hngx-be/main/s-2/md-assets/uml1.png" width="400">
<img src="https://raw.githubusercontent.com/Benrobo/hngx-be/main/s-2/md-assets/uml2.png" width="400">
</p>

## Table of Contents

1. [Getting Started](#getting-started)
2. [API Endpoints](#api-endpoints)
   - [Create a Person](#1-create-a-person)
   - [Get a Person](#2-get-a-person)
   - [Update a Person](#3-update-a-person)
   - [Delete a Person](#4-delete-a-person)
3. [Sample Requests and Responses](#sample-requests-and-responses)
4. [Testing the API](#testing-the-api)

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/benrobo/hngx-be.git
   ```

2. Install the dependencies:

   ```bash
   Downloads $ cd /hngx-be/s-2
   s-2 $ yarn
   ```

3. Start the API server:

   ```bash
   yarn start
   # or
   yarn dev
   ```

The API will now be running at `http://localhost:3000`. You can access the API endpoints as described below.

> Note! this api relies on mongodb database, which means you need to have a mongodb cluster running on your pc before starting the api.

## API Endpoints

### 1. Create a Person

- **URL:** `/api`
- **Method:** `POST`
- **Body:** `{name: "Mark"}`
- **Response:**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "User created successfully",
    "statusCode": 200,
    "data": {
      "id": "896ea8dce542ea2d7614",
      "name": "Mark Essein"
    }
  }
  ```

### 2. Get a Person

- **URL:** `/api/:userId`
- **Method:** `GET`
- **Response (Success):**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "Success",
    "statusCode": 200,
    "data": {
      "id": "896ea8dce542ea2d7614",
      "name": "John Doe"
    }
  }
  ```

- **Response (Not Found):**

  ```json
  {
    "errorStatus": true,
    "code": "--person/user-notfound",
    "message": "User doesn't exist.",
    "statusCode": 404
  }
  ```

### 3. Update a Person

- **URL:** `/api/:userId`
- **Method:** `PUT`
- **Body:** `{name: "updated-name"}`
- **Response (Success):**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "User updated successfully",
    "statusCode": 200,
    "data": {
      "id": "896ea8dce542ea2d7614",
      "name": "New Name"
    }
  }
  ```

- **Response (Not Found):**

  ```json
  {
    "errorStatus": true,
    "code": "--person/user-notfound",
    "message": "Failed to update: User doesn't exist.",
    "statusCode": 404
  }
  ```

### 4. Delete a Person

- **URL:** `/api/:userId`
- **Method:** `DELETE`
- **Response (Success):**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "User deleted successfully",
    "statusCode": 200,
    "data": null
  }
  ```

- **Response (Not Found):**

  ```json
  {
    "errorStatus": true,
    "code": "--person/user-notfound",
    "message": "User doesn't exist.",
    "statusCode": 404
  }
  ```

## Testing the API

The api is available to be tested using swagger link below:

[Swagger Test](https://hngx-be2.onrender.com/docs/)

It can aswell be tested using the automated testing script. simply run the command below:

```
npm run test
```