import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UpdateItemForm from "../components/UpdateItemForm";
import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import { getItems, reset } from "../features/items/itemSlice";

function UpdateItems() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  const [text, setText] = useState("text");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const fillInForm = (item) => {
    setText("update")
    console.log(text)
    navigate("/updateForm");
  }

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
        <p>Buy Sell Update Items</p>
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
                    onClick={() => fillInForm(item)}
                  >
                    Update Item
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

export default UpdateItems;
