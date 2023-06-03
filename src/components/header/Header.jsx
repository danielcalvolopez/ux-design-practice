import classes from "./header.module.css";
import { ReactComponent as Logo } from "../../images/fauxica.svg";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
