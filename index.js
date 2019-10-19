// Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// Route Imports
const users = require("./routes/api/users");

// Initialisation
const app = express();
const PORT = process.env.PORT || 12345;

// Body Parser MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to database
const dbURI = require("./config/keys").mongoURI;
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
    .connect(dbURI, dbOptions)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);

// Passport Middleware
app.use(passport.initialize());

// Passport confing
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);

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
