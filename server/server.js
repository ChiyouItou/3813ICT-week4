const express = require("express");
const cors = require("cors");
const User = require("./users");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    new User(
        "john",
        "1999-01-01",
        27,
        "john@gmail.com",
        "123456"
    ),

    new User(
        "mary",
        "2000-02-02",
        26,
        "mary@gmail.com",
        "123456"
    ),

    new User(
        "tom",
        "2001-03-03",
        25,
        "tom@gmail.com",
        "123456"
    )
];

app.post("/api/auth", (req, res) => {
    const { email, password } = req.body;

const user = users.find(
    (u) =>
        u.email === email &&
        u.password === password
);

    /*const { username, password } = req.body;

    const user = users.find(
        (u) =>
            u.username === username &&
            u.password === password
    );*/

    if (user) {

        res.send({
            username: user.username,
            birthdate: user.birthdate,
            age: user.age,
            email: user.email,
            valid: true
        });

    } else {

        res.send({
            valid: false
        });

    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});