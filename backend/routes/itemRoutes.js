const express = require("express");
const router = express.Router();
const {
  getItems,
  getCartItems,
  getAvailableItems,
  getCategoryItems,
  getAllItems,
  setItem,
  updateItem,
  deleteItem,
  addBuyerToItem,
  removeBuyerFromItem,
  getItemById,
} = require("../controllers/itemController");

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getItems).post(protect, setItem)
router.route('/cart').get(protect, getCartItems)
router.route('/available').get(protect, getAvailableItems)
router.route('/category/:id').get(protect, getCategoryItems)
router.route('/all').get(protect, getAllItems)
router.route('/:id').get(protect, getItemById).delete(protect, deleteItem)
router.route('/update/:id').put(protect, updateItem)
router.route('/buyer/:id').put(protect, addBuyerToItem)
router.route('/removeBuyer/:id').put(protect, removeBuyerFromItem)

module.exports = router;
