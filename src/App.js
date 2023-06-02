import classes from "./app.module.css";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};

export default App;
