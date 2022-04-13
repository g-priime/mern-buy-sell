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

    dispatch(getCategoryItems(category));
    setCategory(category);

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
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Living Room">Living Room</option>
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
