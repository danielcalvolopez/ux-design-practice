import classes from "./menu-item.module.css";

const MenuItem = ({ ItemName }) => {
  return <li className={classes["menu-item"]}>{ItemName}</li>;
};

export default MenuItem;
