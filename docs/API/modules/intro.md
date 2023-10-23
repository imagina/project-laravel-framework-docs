---
sidebar_position: 1
---

# Intro

This project has been structured into several independent modules, each designed to fulfill a specific function. Each
module is designed to address different aspects of the application, enabling efficient and modular project management.

## Access to the API
To interact with these modules through the API, you should use the following route structure: `<Your-Domain>/api`. Use
this route to access the functionalities provided by the modules programmatically. Each module has specific endpoints
that you can use to perform specific actions.

Each module has its own detailed documentation, providing specific instructions on how to use its features and
functionalities through the API. We encourage you to make the most of these modules and their interaction capabilities
through the API to achieve your objectives within the project.

Authentication
Authentication is the first necessary step to use basic `CRUD` operations within the modules. To access the application,
follow these steps:

1. Go to the following route: `<Your-Domain>/api/profile/v1/auth/login`.
2. Send a `POST` request with the following payload:
````json
{
  "username": "youremail@mail.com",
  "password": "yourpassword"
}
````
3. You will receive a response that contains the following data:
````json
{
  "data": {
    "expiresIn": "...", // Has a one-year expiration
    "userData": {}, // User data
    "userToken": "..." // Authentication Token
  }
}
````
The response includes an authentication token, which is essential for accessing the protected functionalities of the
application. This token has a one-year validity and will allow you to securely perform CRUD operations in the modules.

Make sure to store this token securely, as you will need it to authenticate in future API requests and access the
module's functionalities. If you have any questions or need additional assistance with the authentication process, feel
free to contact our support team.
