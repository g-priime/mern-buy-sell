import { useState } from "react";
import { useDispatch } from "react-redux";
import {getCategoryItems, getAvailableItems} from '../features/items/itemSlice'

function ItemForm() {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(getCategoryItems(category));
    setCategory("");
  };

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="description">Category Search</label>
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Search
            </button>
            <button
              className="btn btn-block"
              onClick={() => dispatch(getAvailableItems())}
            >
              Clear search results
            </button>
          </div>
        </form>
      </section>
  );
}

export default ItemForm;
