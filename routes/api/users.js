// Imports
const express = require("express");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Import Validators
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Import DB models
const User = require("../../models/User");

// Routes

/* @route GET /api/users/test
 ** @desc  Test route
 ** @access Public
 */
router.get("/test", (req, res) => res.json({ message: "User works" }));

/* @route POST /api/users/register
 ** @desc  Register new user
 ** @access Public (only for type-common), otherwise Admin
 */
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    req.body.email = req.body.email.trim();
    req.body.name = req.body.name.trim();

    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "Email already exists";
                return res.status(400).json(errors);
            }

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                userType: req.body.userType,
                city: req.body.city,
                state: req.body.state,
                phoneNumber: req.body.phoneNumber,
                bloodGroup: req.body.bloodGroup
            });

            bcrypt.genSalt(12, (err, salt) => {
                if (err) throw err;

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;

                    newUser
                        .save()
                        .then(user => {
                            res.json(user);
                        })
                        .catch(err => res.status(404).json(err));
                });
            });
        })
        .catch(err => res.status(404).json(err));
});

/* @route POST /api/users/login
 ** @desc  Login
 ** @access Public
 */
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    req.body.email = req.body.email.trim();

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email.
    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = "Email not found";
                return res.status(404).json(errors);
            }

            // Check for password
            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // Payload
                        const payload = {
                            id: user._id,
                            email: user.email,
                            name: user.name,
                            userType: user.userType
                        };

                        // Sign Token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 259200 },
                            (err, token) => {
                                if (err) throw err;

                                // Send Token
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        errors.password = "Incorrect password";
                        res.status(400).json(errors);
                    }
                })
                .catch(err => res.status(404).json(err));
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;
