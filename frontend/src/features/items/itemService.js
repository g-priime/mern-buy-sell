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
  addBuyerToItem,
  getItems,
  getAllItems,
  deleteItem,
};

export default itemService;
