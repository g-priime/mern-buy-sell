import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategoryItems,
  getAvailableItems,
} from "../features/items/itemSlice";

function ItemForm() {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (category && category !== "None selected") {
      dispatch(getCategoryItems(category));
    } else {
      dispatch(getAvailableItems());
    }
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="category">Search by category</label>
            <select
              type="search"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option defaultValue>None selected</option>
              <option value="Appliances">Appliances</option>
              <option value="Automotive">Automotive</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Sporting goods">Sporting goods</option>
              <option value="Miscellaneous">Miscellaneos</option>
            </select>
          </div>
          <div className="form-group search-buttons">
            <button className="btn" type="submit">
              Search
            </button>
            <button
              className="btn"
              onClick={() => dispatch(getAvailableItems())}
            >
              Clear search results
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ItemForm;
