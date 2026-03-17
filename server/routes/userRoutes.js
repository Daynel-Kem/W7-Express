const users = require("../../database/data.json")   // temporary user database for demo purposes

const express = require("express")
const router = express.Router(); // creates a mini router for the user route

// GET "/user/all"
router.get("/all", (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: users,
            message: "Returned all users",
            error: null
        })
    } catch {
        res.status(404).json({
            success: false,
            data: null,
            message: "Failed GET ALL",
            error: "Failed to return ALL Users"  
        })
    }
})

// GET "/user/:id"
router.get("/:id", (req, res) => {
    const userId = req.params.id
    var user = null
    for (var i = 0; i < users.length; ++i) {
        if (users[i].id == userId) {
            user = users[i];
            break
        }
    }
    if (user) {
        res.status(200).json({
            success: true,
            data: user,
            message: "User found",
            error: null
        })
    } else {
        res.status(404).json({
            success: false,
            data: user,
            message: "User not found",
            error: "No user exists with that id"
        })
    }
})

// POST "/user/:id"
router.post("/", (req, res) => {
    for (var i = 0; i < users.length; ++i) {
        if (users[i].id == req.body.id) {
            res.status(400).json({
                success: false,
                data: null,
                message: `User with id ${req.body.id} already exists`,
                error: "User id already exists"
            })
            return;
        }
    }

    const user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        city: req.body.city
    }

    users.push(user)
    res.status(200).json({
        success: true,
        data: null,
        message: `User Created Successfully`,
        error: null
    })
})

// PUT "/user/:id"
router.put("/:id", (req, res) => {
    const userId = req.params.id
    index = -1
    for (var i = 0; i < users.length; ++i) {
        if (users[i].id == userId) {
            index = i
            break;
        }
    }

    if (index > -1) {
        users[index] = {
            id: userId,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            gender: req.body.gender,
            city: req.body.city
        }
        res.status(200).json({
            success: true,
            data: null,
            message: `Updated User ${userId} Successfully`,
            error: null
        })
    } else {
        res.status(404).json({
            success: false,
            data: null,
            message: `User at ${userId} not found`,
            error: "Failed to update user"
        })
    }
})

// DELETE "/user/:id"
router.delete("/:id", (req, res) => {
    const userId = req.params.id
    for (var i = 0; i < users.length; ++i) {
        if (users[i].id == userId) {
            users.splice(i, 1)
            res.status(200).json({
                success: true,
                data: null,
                message: `Deleted ${userId} Successfully`,
                error: null
            })
            return;
        }
    }
    res.status(404).json({
        success: true,
        data: null,
        message: `User ${userId} Not Found`,
        error: "Failed to delete user"
    })
})

module.exports = router;    // export the router for the main app to use