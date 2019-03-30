const express = require("express");
const path = require("path");
const app = express();
const nodemailer = require("nodemailer");
var app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "moonshot.no.reply@gmail.com",
        pass: "rainbowDash64!!!JON_SNOW"
    }
});

app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.query;

    const mailOptions = {
        from: "stevedorn9@gmail.com",
        to: "stevedorn9@gmail.com",
        subject: "Contact from Your Website",
        html: `<div style="max-width: 550px;text-align: center;margin: auto;">
        <h3>Contact from Your Website</h3>
        <p>name: ${name}</p>
        <p>email: ${email}</p>
        <p>subject: ${subject}</p>
        <p>message: ${message}</p></div>`
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

app.listen(9000);
