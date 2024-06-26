import React from "react";
import styles from "./Hero.module.css";
import { Buttons } from "../Buttons/Buttons";
import HeroImg from '../../assets/heroImage.png'

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.upperDiv}>
        <h1>The World's Leading Business Valuation Software</h1>
        <p>
          Valutico provides the financial services industry and valuation
          experts with data-driven tools to perform accurate company valuations
          faster and more accurately than ever before.
        </p>
        <div className={styles.btns}>
          <Buttons text='Request a Demo'/>
          <Buttons text='Sign Up/Log In' auth/>
        </div>
      </div>
      <div className={styles.imgCtn}>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
