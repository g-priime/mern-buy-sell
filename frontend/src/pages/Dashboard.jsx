import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import {
  getAvailableItems,
  reset,
  addBuyerToItem,
} from "../features/items/itemSlice";
import SearchForm from '../components/SearchForm'

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message, cat } = useSelector(
    (state) => state.items
  );

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
        <p>Buy Sell Dashboard</p>
      </section>

      <SearchForm />
      {cat ? (<>Results for: {cat}</>) : (<>All items</>)}

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
          <h3>There are no items available for chosen category</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
