import classes from "./hero.module.css";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import { ReactComponent as Confetti } from "../../images/confetti.svg";
import ProductCard from "../products/ProductCard";
import Image1 from "../../images/clothing1.jpg";
import Image2 from "../../images/clothing2.jpg";
import Image3 from "../../images/clothing3.jpg";

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
      <div className={classes.images}>
        <ProductCard className={classes.left} img={Image1} />
        <ProductCard className={classes["top-right"]} img={Image2} />
        <ProductCard className={classes["bottom-right"]} img={Image3} />
      </div>
    </div>
  );
};

export default Hero;
