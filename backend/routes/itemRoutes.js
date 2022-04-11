const express = require("express");
const router = express.Router();
const {
  getItems,
  getKartItems,
  getAllItems,
  setItem,
  updateItem,
  deleteItem,
  addBuyerToItem,
} = require("../controllers/itemController");

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getItems).post(protect, setItem)
router.route('/kart').get(protect, getKartItems)
router.route('/all').get(protect, getAllItems)
router.route('/:id').delete(protect, deleteItem).put(protect, updateItem)
router.route('/buyer/:id').put(protect, addBuyerToItem)

module.exports = router;
