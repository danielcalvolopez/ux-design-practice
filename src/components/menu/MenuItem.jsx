import classes from "./menu-item.module.css";

const MenuItem = ({ ItemName, active }) => {
  return (
    <li className={`${classes["menu-item"]}`}>
      <a className={`${active && classes.active}`} href="/">
        {ItemName}
      </a>
    </li>
  );
};

export default MenuItem;
