# W7-Express
creating a simple backend server using express

This backend server will handle receiving requests to access a database and return the information requested
we'll use a sample database of json objects for now, but eventually this will need to use a proper database

this backend supports the routes "/user"
GET "/all" - returns all users
GET "/:id" - returns the user with the given id
POST "/" - creates a new user with the given id and a body (if id is already in use, then return a failed request)
PUT "/:id" - updates the user with given id with the body
DELETE "/:id" - deletes the user with given id