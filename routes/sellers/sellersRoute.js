const express = require('express');
const router = express.Router();
router.get('/getAllSellers', (req, res)=>{
    res.send('Sellers Listing');
})
module.exports = router;