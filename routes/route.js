//initialize
var express = require('express');
var router = express.Router();

//modules
router.use('/brands', require('./brands/brandsRoute'))
router.use('/products', require('./products/productsRoute'))
router.use('/sellers', require('./sellers/sellersRoute'))

//export
module.exports = router;