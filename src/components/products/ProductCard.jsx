import classes from "./product-card.module.css";

const ProductCard = ({ img, className }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`${classes["product-card"]} ${className}`}
    >
      <div className={classes.text}>
        <div className={classes.description}>
          <h4>Fauxica Sport</h4>
          <p>Running shoe</p>
        </div>
        <p className={classes.price}>$59</p>
      </div>
    </div>
  );
};

export default ProductCard;
