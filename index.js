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

// Serve static assets.
// if (process.env.NODE_ENV === "production") {
// set a static folder.
app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
