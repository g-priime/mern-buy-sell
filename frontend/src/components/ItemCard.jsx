function ItemCard({ item, itemButton }) {

  return (
    <>
      <div className="item">
        {/*
        <div>{new Date(item.createdAt).toLocaleString("en-US")}</div>
*/}
        <h1>{item.text}</h1>
        <p className="price">${item.price}</p>
        <p>{item.description}</p>
        <p>{itemButton}</p>
      </div>
    </>
  );
}

export default ItemCard;
