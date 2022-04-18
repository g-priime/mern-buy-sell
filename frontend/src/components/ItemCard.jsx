function ItemCard({ item, itemButton }) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <div className="item">
        <h1>{item.text}</h1>
        <p className="price">${item.price}</p>
        <p>{item.description}</p>
        <p>Category: {item.category}</p>
        <p>Date Posted: {new Date(item.createdAt).toLocaleString("en-US", options)}</p>
        <p>{itemButton}</p>
      </div>
    </>
  );
}

export default ItemCard;
