const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const nodemailer = require("nodemailer");
const credentials = require("../credentials");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: credentials.emailUsername,
        pass: credentials.emailPassword
    }
});

app.post("/api/contact", (req, res) => {
    const { name } = req.query;

    const mailOptions = {
        from: "stevedorn9@gmail.com",
        to: "stevedorn9@gmail.com",
        subject: "Contact from Your Website",
        text: `name: ${name}`
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () => console.log("Express server is running on localhost:3001"));
