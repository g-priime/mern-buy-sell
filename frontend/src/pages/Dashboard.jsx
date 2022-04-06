import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ItemItem from "../components/ItemItem";
import Spinner from '../components/Spinner'
import { getAllItems, reset } from "../features/items/itemSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector((state) => state.items)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAllItems())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch]);

  if(isLoading) {
    return <Spinner />
  }

  return <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Buy Sell Dashboard</p>
    </section>

    

    <section className="content">
      {items.length > 0 ? (
        <div className="items">
          {items.map((item) => (
            <ItemItem key={item._id} item={item} />
          ))}
        </div>
      ) : (<h3>You have not set any goals</h3>)}
    </section>
  </>;
}

export default Dashboard;
