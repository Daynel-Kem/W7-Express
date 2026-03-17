const express = require('express');
const app = express();
const port = 3000

// import userRoutes module
const userRoutes = require("./routes/userRoutes")

// Middleware to parse JSON
app.use(express.json());

// Mount the route module at /user
app.use('/user', userRoutes)

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
