import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import { getAvailableItems, getCategoryItems, reset, addBuyerToItem } from "../features/items/itemSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  const [description, setDescription] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(getCategoryItems(description))
    setDescription('')
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    // Get items not currently in any user karts
    dispatch(getAvailableItems());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Buy Sell Dashboard</p>
      </section>

      <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Search
          </button>
        </div>
      </form>
    </section>

      <section className="content">
        {items.length > 0 ? (
          <div className="items">
            {items.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                itemButton={
                  <button
                    className="btn"
                    onClick={() => dispatch(addBuyerToItem(item._id))}
                  >
                    Add to cart
                  </button>
                }
              />
            ))}
          </div>
        ) : (
          <h3>There are no items available for sale at this time</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
