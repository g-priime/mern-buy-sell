import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem, createItem, addBuyerToItem } from "../features/items/itemSlice";
import { useNavigate } from "react-router-dom";

function UpdateItemForm({ id, oldText, oldPrice, oldCategory, oldDescription }) {
  const [_id] = useState(id);
  const [text, setText] = useState(oldText);
  const [price, setPrice] = useState(oldPrice);
  const [category, setCategory] = useState(oldCategory);//adds default value to category selection
  const [description, setDescription] = useState(oldDescription);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let showError = false;

  const onSubmit = (e) => {
    e.preventDefault();

      dispatch(updateItem({_id, text, price, category, description}));
      setText("");
      setPrice("");
      setCategory("");
      setDescription("");

  };

  return (
    <section className="form">
      {showError ? (<>Please select a category</>) : (<></>)}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Item</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option disabled>Select category...</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Living Room">Living Room</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Update Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default UpdateItemForm;
