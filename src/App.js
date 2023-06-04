import classes from "./app.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
