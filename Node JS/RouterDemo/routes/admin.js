const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('Sorry not an Admin!');
});

router.get('/topsecret', (req, res) => {
    res.send('This is top sceret!');
});

router.get('/deleteeverythng', (req, res) => {
    res.send('Ok deleted everything!');
});

module.exports = router;