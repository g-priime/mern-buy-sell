import { useDispatch } from "react-redux";
import { deleteItem } from "../features/items/itemSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="item">
        {/*
        <div>{new Date(item.createdAt).toLocaleString("en-US")}</div>
*/}
        <h1>{item.text}</h1>
        <p className="price">${item.price}</p>
        <p>{item.description}</p>
        <p>
          <button onClick={() => dispatch(deleteItem(item._id))}>
            Add to cart
          </button>
        </p>
      </div>
    </>
  );
}

export default ItemCard;
