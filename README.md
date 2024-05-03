# Assignment

## Description

Today we are mapping a SpaceX rocket to a unified model.

This application represents a [Unified API](https://blog.apideck.com/what-is-a-unified-api) with two configured endpoints:

- GET `/hello`
- GET `/space/rockets/{rocket-id}`

If you try out the current app locally using cURL, Postman or another API Client, you'll see that only one is implemented. It's your task to implement the other endpoint.

## Steps to take:

1. Find a working SpaceX API, it's publicly available.
2. Add an [OpenAPI spec](https://swagger.io/specification/) of the SpaceX API that contains all the needed info to connect to it. This spec should be added to the `/src/services/spaceX` folder. Only add the needed info, the full spec is not needed. As our own API is also based on OpenAPI, you can use that as a reference.
3. Add the `rocketsOne` operation to the code base and implement the logic to execute the SpaceX request. Try to use your newly created spaceX spec for this, you can use one or more functions in the utils folder to use this spec.
4. Map the incoming SpaceX response to the Unified model described in theJSON schema you find in the `/unify` folder

In the end, we should be able to execute a GET call to retrieve the needed rocket information in the correct format.

Also make sure the company property is always uppercase.

## Requirements

- Avoid the use of `any`
- Write tests
- Introduce proper error handling
- Ensure the API interaction is secure and efficiently handles possible errors or data inconsistencies.
- Document the setup and usage instructions clearly

BONUS: Test the implementation locally using tools like [Portman](https://github.com/apideck-libraries/portman).

In the end, this is a simple test, so focus on code quality and don't hold back from going the extra mile. 

Good luck!
