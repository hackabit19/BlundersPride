// Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const multer = require("multer");

// Route Imports
const users = require("./routes/api/users");
const missingPersons = require("./routes/api/missingPersons");
// Initialisation
const app = express();
const PORT = process.env.PORT || 12345;

// Body Parser MiddleWare
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// Connecting to database
const dbURI = require("./config/keys").mongoURI;
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
    .connect(dbURI, dbOptions)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);

// Multer Middleware
app.use("/uploads", express.static("uploads"));

// Passport Middleware
app.use(passport.initialize());

// Passport confing
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/missingPersons", missingPersons);

// var ably = new require("ably").Realtime("0BeZCQ.p_xJxQ:kVy3m7kzD63IqtwN");
// var channel = ably.channels.get("ablyTest");
// app.post("/ablyTest", (req, res) => {
//     const email = req.body.email;
//     User.findOne({ email })
//         .then(user => {
//             channel.publish("greeting", user);
//             return res.json({ msg: "success" });
//         })
//         .catch(err => console.log(err));

//     // Publish a message to the test channel
// });

// channel.subscribe("greeting", message => {
//     console.log(message.data);
// });

// Serve static assets.
if (process.env.NODE_ENV === "production") {
    // set a static folder.
    app.use(express.static(path.resolve(__dirname, "client", "build")));

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "clientBuild", "build", "index.html")
        );
    });
}

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
