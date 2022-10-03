//local server for API calls for distributing login
const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require("bcrypt");
const pool = require("./database");
require("dotenv").config();

app.use(cors());
app.use(express.json());//req.body

/// ROUTES /// CAN ADD MORE BUT THIS IS JUST FOR AUTH
app.post("/auth", async (req, res) => {
        const cred = await pool.query(
            "SELECT * FROM users WHERE username = $1 AND pass = $2",
            [req.body.username, req.body.password]
        );
        if(cred.rowCount > 0)
        {
            res.send({
                token: process.env.REACT_APP_SECRET_TOKEN
            });
        }
        else {
            res.send({loggedIn: false});
        }
});

app.post("/create", async (req, res) => {
    hashPass = await bcrypt.hash(req.body.password, 15);
    
    try{
    const newUser = await pool.query(
        "INSERT INTO users (username, pass) VALUES ($1, $2) RETURNING *",
        [req.body.username, hashPass]
    );
    res.json(newUser.rows[0]);
    console.log(newUser.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
});



app.listen(8080, () => console.log('API running on http://localhost:8080/login'));