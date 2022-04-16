import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UpdateItemForm from "../components/UpdateItemForm";
import Spinner from "../components/Spinner";
import { reset } from "../features/items/itemSlice";

function UpdateFormPage() {
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

      {items ? <UpdateItemForm /> : <></>}
    </>
  );
}

export default UpdateFormPage;
