import classes from "./product-card.module.css";

const ProductCard = ({
  img,
  className,
  productName,
  productDescription,
  price,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`${classes["product-card"]} ${className}`}
    >
      <div className={classes.text}>
        <div className={classes.description}>
          <h4>{productName}</h4>
          <p>{productDescription}</p>
        </div>
        <p className={classes.price}>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
