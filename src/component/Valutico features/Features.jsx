import React from "react";
import Heading from "../SectionHeading/Heading";
import styles from "./Features.module.css";
import Boxes from "../WhySection/Boxes";
import { Buttons } from "../Buttons/Buttons";
import FeaturesImg from "../../assets/featuresImg.png"

function Features() {
  return (
    <section className={styles.features}>
      <Heading
        heading="Accurate Valuations in Minutes"
        para="Find the company data you need in seconds, with 3TB of global financial data featuring almost 1 million transactions and over 50,000 thousand comparable peers"
      />

      <div className={styles.ctn}>
        <div className={styles.textCtn}>
          <Boxes
            heading="Personalize your reports"
            para="Save hours transferring results from spreadsheet to slides, by exporting your results to Powerpoint and Word templates effortlessly."
            features
          />
          <Boxes
            heading="28 Valuation Methods"
            para="From loss-making companies to mature enterprises, and from startups to SME's, value businesses of any type using multiple valuation methods."
            features
          />
          <Boxes
            heading="Fast Access to Premium Data"
            para="Access the most highly-trusted global databases of company financial data to locate the figures you need."
            features
          />
        </div>
        <div className={styles.imgCtn}>
          <img src={FeaturesImg} alt="A man writing" />
        </div>
      </div>

      <Buttons text='Request a Demo'/>
    </section>
  );
}

export default Features;
