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
        <ProductCard
          productName="Fauxica Classic"
          productDescription="Wool sweater"
          price="59"
          className={classes.left}
          img={Image1}
        />
        <ProductCard
          productName="Fauxica Denim"
          productDescription="Denim jacket"
          price="59"
          img={Image2}
        />
        <ProductCard
          productName="Fauxica Sport"
          productDescription="Running shoe"
          price="59"
          img={Image3}
        />
      </div>
    </div>
  );
};

export default Hero;
