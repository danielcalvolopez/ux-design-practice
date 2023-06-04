import classes from "./secondary-button.module.css";
import { HiArrowLongRight } from "react-icons/hi2";

const SecondaryButton = ({ children }) => {
  return (
    <button className={classes["secondary-button"]} type="submit">
      {children} <HiArrowLongRight className={classes.arrow} size={23} />
    </button>
  );
};

export default SecondaryButton;
