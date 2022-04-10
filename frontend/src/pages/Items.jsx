import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemForm from "../components/ItemForm";
import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import { getItems, reset, deleteItem } from "../features/items/itemSlice";

function Items() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    // Get items posted by currently logged in user only
    dispatch(getItems());

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
        <p>Buy Sell Items</p>
      </section>

      <ItemForm />

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
                    onClick={() => dispatch(deleteItem(item._id))}
                  >
                    Remove Item
                  </button>
                }
              />
            ))}
          </div>
        ) : (
          <h3>You have not added any items to sell</h3>
        )}
      </section>
    </>
  );
}

export default Items;
