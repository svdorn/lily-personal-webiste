// const express = require("express");
// const bodyParser = require("body-parser");
// const pino = require("express-pino-logger")();
// const nodemailer = require("nodemailer");
// var path = require("path");
// var http = require("http");
// //PROXY
// var httpProxy = require("http-proxy");
//
// var port = process.env.PORT || 3001;
//
// var app = express();
// app.set("port", port);
//
// //PROXY TO API
// const apiProxy = httpProxy.createProxyServer({
//     target: "http://localhost:3001"
// });
// app.use("/api", function(req, res) {
//     apiProxy.web(req, res);
// });
// // END PROXY
//
// /**
//  * Create HTTP server.
//  */
// var server = http.createServer(app);
//
// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port);
// server.on("error", onError);
// server.on("listening", onListening);
//
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);
// app.use(express.static(path.join(__dirname, "public")));
//
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "moonshot.no.reply@gmail.com",
//         pass: "rainbowDash64!!!JON_SNOW"
//     }
// });
//
// app.post("/api/contact", (req, res) => {
//     const { name, email, subject, message } = req.query;
//
//     const mailOptions = {
//         from: "stevedorn9@gmail.com",
//         to: "stevedorn9@gmail.com",
//         subject: "Contact from Your Website",
//         html: `<div style="max-width: 550px;text-align: center;margin: auto;">
//         <h3>Contact from Your Website</h3>
//         <p>name: ${name}</p>
//         <p>email: ${email}</p>
//         <p>subject: ${subject}</p>
//         <p>message: ${message}</p></div>`
//     };
//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Email sent: " + info.response);
//         }
//     });
//     res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });
//
// /**
//  * Event listener for HTTP server "error" event.
//  */
// function onError(error) {
//     if (error.syscall !== "listen") {
//         throw error;
//     }
//
//     var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
//
//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//         case "EACCES":
//             console.error(bind + " requires elevated privileges");
//             process.exit(1);
//             break;
//         case "EADDRINUSE":
//             console.error(bind + " is already in use");
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// }
//
// /**
//  * Event listener for HTTP server "listening" event.
//  */
//
// function onListening() {
//     var addr = server.address();
//     var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
//     "Listening on " + bind;
// }
