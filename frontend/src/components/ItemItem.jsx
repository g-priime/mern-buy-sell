import { useDispatch } from "react-redux";
import { deleteItem } from "../features/items/itemSlice";

function ItemItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div>{new Date(item.createdAt).toLocaleString("en-US")}</div>
      <h2>{item.text}</h2>
      <h4>Price: ${item.price}</h4>
      <h4>Owner: {item.username}</h4>
      <button onClick={() => dispatch(deleteItem(item._id))} className="close">
        X
      </button>
    </div>
  );
}

export default ItemItem;
