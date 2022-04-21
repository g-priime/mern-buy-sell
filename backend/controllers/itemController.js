const asyncHandler = require('express-async-handler')

const Item = require('../models/itemModel')
const User = require('../models/userModel')

// @desc    Get item by item id
// @route   GET /api/items/:id
// @access  Private
const getItemById = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    res.status(200).json(item)
})

// @desc    Get items posted by currently logged in user
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ user: req.user.id })

    res.status(200).json(items)
})

// @desc    Get items in cart of currently logged in user
// @route   GET /api/items/cart
// @access  Private
const getCartItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ buyer: req.user.id })

    res.status(200).json(items)
})

// @desc    Get items not currently in any user kart
// @route   GET /api/items/available
// @access  Private
const getAvailableItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ buyer: null })

    res.status(200).json(items)
})

// @desc    Get available items belonging to certain category
// @route   GET /api/items/category/:id
// @access  Private
const getCategoryItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ buyer: null, category: req.params.id })

    res.status(200).json(items)
})

// @desc    Get items of all users
// @route   GET /api/items/all
// @access  Private
const getAllItems = asyncHandler(async (req, res) => {
    const items = await Item.find()

    res.status(200).json(items)
})

// @desc    Set item
// @route   POST /api/items
// @access  Private
const setItem = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    if(!req.body.price) {
        res.status(400)
        throw new Error('Please add a price')
    }

    if(!req.body.category) {
        res.status(400)
        throw new Error('Please add a category')
    }

    if(!req.body.description) {
        res.status(400)
        throw new Error('Please add a description')
    }

    const item = await Item.create({
        text: req.body.text,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        user: req.user.id,
        username: req.user.name,
    })

    res.status(200).json(item)
})

// @desc    Update item
// @route   PUT /api/items/update/:id
// @access  Private
const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the item user
    if(item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedItem)
})

// @desc    Adds buyer to item
// @route   PUT /api/items/buyer/:id
// @access  Private
const addBuyerToItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        user: req.body.user,
        username: req.body.username,
        buyer: req.user.id,
        new: false,
    })

    res.status(200).json(updatedItem)
})

// @desc    Removes buyer from item
// @route   PUT /api/items/removeBuyer/:id
// @access  Private
const removeBuyerFromItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        user: req.body.user,
        username: req.body.username,
        buyer: null,
        new: false,
    })

    res.status(200).json(updatedItem)
})

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the item user
    if(item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await item.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getItemById,
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
}