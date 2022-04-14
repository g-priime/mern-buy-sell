import axios from "axios";

const API_URL = "/api/items/";

// create new item
const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, itemData, config);

  return response.data;
};

// Update item
const updateItem = async (itemId, itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + itemId, itemData, config);

  return response.data;
};

// Add buyer attribute to item
const addBuyerToItem = async (itemId, token) => {
  // Won't let me send without this data, so set to empty object - to be fixed later
  const itemData = {} 

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "buyer/" + itemId, itemData, config);

  return response.data;
};

// Make buyer attribute null for item
const removeBuyerFromItem = async (itemId, token) => {
  // Won't let me send without this data, so set to empty object - to be fixed later
  const itemData = {} 

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "removeBuyer/" + itemId, itemData, config);

  return response.data;
};

// Get user items
const getItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get items for kart of currently logged in user
const getKartItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "kart", config);

  return response.data;
};

// Get items not currently in any user karts
const getAvailableItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "available", config);

  return response.data;
};

// Get available items belonging to certain category
const getCategoryItems = async (category, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "category/" + category, config);

  return response.data;
};

// Get items of all users
const getAllItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "all", config);

  return response.data;
};

// Delete user item
const deleteItem = async (itemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + itemId, config);

  return response.data;
};

const itemService = {
  createItem,
  updateItem,
  addBuyerToItem,
  removeBuyerFromItem,
  getItems,
  getKartItems,
  getAvailableItems,
  getCategoryItems,
  getAllItems,
  deleteItem,
};

export default itemService;
