import classes from "./primary-button.module.css";

const PrimaryButton = ({ children }) => {
  return (
    <button className={classes["primary-button"]} type="submit">
      {children}
    </button>
  );
};

export default PrimaryButton;
