import { useState } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../features/items/itemSlice";
import { FaCameraRetro } from "react-icons/fa";

function ItemForm() {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Appliances"); //adds default value to category selection
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);

      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createItem({ text, price, category, description, image: file }));
    setText("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return (
    <section className="form">
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
            <option value="Appliances">Appliances</option>
            <option value="Automotive">Automotive</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Sporting goods">Sporting goods</option>
            <option value="Miscellaneous">Miscellaneos</option>
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
          <label htmlFor="image" className="image">
            Picture
            <FaCameraRetro />
            {file && <div className="file-name">{file.name}</div>}
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={changeHandler}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}

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
