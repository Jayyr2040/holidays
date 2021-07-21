const express = require("express");
const Holiday = require('../models/holidays')
const router = express.Router();

// gets all holidays - like index
router.get('/', (req,res) => {
    res.send("holidays");
})

// create a holiday
router.post('/', (req,res) => {
    // create db
    Holiday.create(req.body,(error,createdHoliday) => {
        if (error) {
            res.status(400).json({ error: error.message });
          }
          // .json() will send proper headers in response so client knows it's json coming back
          res.status(200).send(createdHoliday);
})
})

module.exports = router;