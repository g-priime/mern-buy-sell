import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UpdateItemForm from "../components/UpdateItemForm";
import ItemCard from "../components/ItemCard";
import Spinner from "../components/Spinner";
import { getItemById, reset } from "../features/items/itemSlice";

function UpdateFormPage() {
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
    setText("update");
    console.log(text);
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getItemById(items._id))

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
        <p>Buy Sell Update Form</p>
      </section>

      {items ? (
        <UpdateItemForm
          oldText={items && items.text}
          oldPrice={items && items.price}
          oldCategory={items && items.category}
          oldDescription={items && items.description}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default UpdateFormPage;
