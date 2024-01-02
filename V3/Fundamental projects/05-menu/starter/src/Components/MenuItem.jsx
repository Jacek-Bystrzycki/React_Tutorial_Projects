export const MenuItem = ({ product }) => {
  return (
    <div>
      <h4>Product: {product.title}</h4>
      <div>
        <span>Category: {product.category}</span>
        <span>Price: {product.price}</span>
      </div>
      <img width={200} src={product.img} />
      <div>
        <span>Description:</span>
        <p>{product.desc}</p>
      </div>
    </div>
  );
};
