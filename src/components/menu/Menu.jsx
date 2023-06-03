import classes from "./menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <MenuItem ItemName="home" />
      <MenuItem ItemName="products" />
      <MenuItem ItemName="gallery" />
      <MenuItem ItemName="contact" />
    </ul>
  );
};

export default Menu;
