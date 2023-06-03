import classes from "./menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <nav>
      <ul className={classes.menu}>
        <MenuItem active ItemName="home" />
        <MenuItem ItemName="products" />
        <MenuItem ItemName="gallery" />
        <MenuItem ItemName="contact" />
      </ul>
    </nav>
  );
};

export default Menu;
