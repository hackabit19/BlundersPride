const express = require("express");
const MissingPerson = require("../../models/MissingPerson");
const router = require("express").Router();
const multer = require("multer");
const ably = new require("ably").Realtime("0BeZCQ.p_xJxQ:kVy3m7kzD63IqtwN");
const channel = ably.channels.get("light");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* @route POST /api/missingPersons/reportMissing
 ** @desc  Add a new missing person.
 ** @access police
 */
router.post("/reportMissing", upload.single("imageData"), (req, res) => {
    const newMissingPerson = new MissingPerson({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        imageName: req.body.imageName,
        imageData: req.file.path,
        city: req.body.city,
        state: req.body.state,
        details: req.body.details
    });

    newMissingPerson
        .save()
        .then(missingPerson => {
            channel.publish(missingPerson.city, missingPerson);
            return res.status(200).json(missingPerson);
        })
        .catch(err => console.log(err));
});

/* @route GET /api/missingPersons/all
 ** @desc  Return all missing reports.
 ** @access public
 */
router.get("/all", (req, res) => {
    MissingPerson.find({ found: false })
        .sort({ date: -1 })
        .then(persons => {
            return res.json(persons);
        })
        .catch(err => console.log(err));
});

/* @route GET /api/missingPersons/:id
 ** @desc  Return missing person.
 ** @access public
 */
router.get("/single/:id", (req, res) => {
    MissingPerson.findById(req.params.id)
        .then(person => {
            return res.json(person);
        })
        .catch(err => console.log(err));
});

module.exports = router;
