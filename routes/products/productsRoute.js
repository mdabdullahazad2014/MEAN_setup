const express = require('express');
const router = express.Router();
router.get('/getAllProducts', (req, res)=>{
    res.send('Products Listing');
})
module.exports = router;