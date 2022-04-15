import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem, getItemById } from "../features/items/itemSlice";

function UpdateItemForm({

  oldText,
  oldPrice,
  oldCategory,
  oldDescription,
}) {
  const { items, isLoading, isError, message, id } = useSelector(
    (state) => state.items
  );

  const [_id] = useState(items._id);
  const [text, setText] = useState(items.text);
  const [price, setPrice] = useState(items.price);
  const [category, setCategory] = useState(items.category); //adds default value to category selection
  const [description, setDescription] = useState(items.description);
  const dispatch = useDispatch();

  let showError = false;

  

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateItem({ _id, text, price, category, description }));
    setText("");
    setPrice("");
    setCategory("");
    setDescription("");

  };

  return (
    <section className="form">
      {showError ? <>Please select a category</> : <></>}
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
