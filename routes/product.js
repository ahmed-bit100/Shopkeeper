const express = require('express');
const {
  addProducts,
  getProducts,
  deleteProducts,
  editProducts,
} = require('../controllers/product.controller');
const router = express.Router();

router.get('/get_products', getProducts);
router.post('/add_products', addProducts);
router.delete('/delete_products/:id', deleteProducts);
router.put('/edit_products/:id', editProducts);

module.exports = router;
