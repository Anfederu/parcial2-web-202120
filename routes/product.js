var express = require('express');
var router = express.Router();
const product = require('../controllers/product.js')

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req = request, res = response, next) {

  const data = product.getProducts(req);
  res.send(data);
});

module.exports = router;
