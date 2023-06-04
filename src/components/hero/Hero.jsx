import classes from "./hero.module.css";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import { ReactComponent as Confetti } from "../../images/confetti.svg";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.text}>
        <div className={classes.slogan}>
          <h1>Quality apparel without the price tag</h1>
          <p>
            No need to spend $xxx on apparel just for the name’s sake. Our
            premium apparel is made from the same stuff.
          </p>
        </div>
        <div className={classes.cta}>
          <PrimaryButton>browse our collection</PrimaryButton>
          <SecondaryButton>spring ‘23 collection</SecondaryButton>
        </div>
        <div className={classes.announce}>
          <Confetti className={classes.confetti} />
          <h2>50K</h2>
          <p>
            We’re proud to announce that we now employ a workforce of over
            <span className={classes.bold}> 50,000</span> . It’s all possible
            because of you.
          </p>
        </div>
      </div>
      <div className={classes.images}>Images here</div>
    </div>
  );
};

export default Hero;
