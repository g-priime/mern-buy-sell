import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import {
  getKartItems,
  reset,
  removeBuyerFromItem,
} from "../features/items/itemSlice";

function Kart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  let displayItems = items.slice();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getKartItems());

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
        <p>Buy Sell Kart</p>
      </section>

      <section className="content">
        {items.length > 0 ? (
          <div className="items">
            {displayItems.reverse().map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                itemButton={
                  <button
                    className="btn"
                    onClick={() => dispatch(removeBuyerFromItem(item._id))}
                  >
                    Remove from kart
                  </button>
                }
              />
            ))}
          </div>
        ) : (
          <h3>You have not added any items to your kart</h3>
        )}
      </section>

      <section className="footer">
        {items.length > 0 ? (
          <button
            className="btn btn-checkout"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
          </button>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Kart;
