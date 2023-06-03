import classes from "./header.module.css";
import { ReactComponent as Logo } from "../../images/fauxica.svg";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
