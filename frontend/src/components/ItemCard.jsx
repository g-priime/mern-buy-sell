function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

function ItemCard({ item, itemButton }) {
  let options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <div className="item">
        <h1>{item.text}</h1>
        <p className="price">${item.price}</p>
        <p>{item.description}</p>
        <p>Category: {item.category}</p>
        <p>
          Date Posted:{" "}
          {new Date(item.createdAt).toLocaleString("en-US", options)}
        </p>
        <div>
          {item && item.img && item.img.data && item.img.data.data ? (
            <img
              src={`data:image/jpeg;base64,${arrayBufferToBase64(
                item.img.data.data
              )}`}
              alt=""
              className="img"
            />
          ) : (
            <>No image</>
          )}
        </div>
        <p>{itemButton}</p>
      </div>
    </>
  );
}

export default ItemCard;
