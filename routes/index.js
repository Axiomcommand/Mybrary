const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('ketup')
    res.render('index')
})



module.exports = router