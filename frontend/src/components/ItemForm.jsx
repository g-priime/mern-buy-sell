import { useState } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../features/items/itemSlice";

function ItemForm() {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Kitchen");//adds default value to category selection
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  let showError = false;

  const onSubmit = (e) => {
    e.preventDefault();

      dispatch(createItem({ text, price, category, description }));
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
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default ItemForm;
