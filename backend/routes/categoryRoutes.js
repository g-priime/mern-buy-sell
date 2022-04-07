const express = require("express");
const router = express.Router();
const {
  getCategories,
  setCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getCategories).post(setCategory)
router.route('/:id').delete(deleteCategory).put(updateCategory)

module.exports = router;
