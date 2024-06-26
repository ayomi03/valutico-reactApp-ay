import React from "react";
import Heading from "../SectionHeading/Heading";
import styles from "./Why.module.css";
import WhyBoxes from "./WhyBoxes";

function Why() {
  return (
    <section className={styles.why}>
      <Heading
        dark
        heading="Why Valutico?"
        para="An award-winning fintech providing a range of company valuation solutions, Valutico provides the financial services industry and valuation experts with data-driven tools."
      />

      <div className={styles.boxCtn}>
        <WhyBoxes
            heading="Secure"
            para="Private by default, creating a safe space around your projects and your data."
        />
        <WhyBoxes
            heading="Reliable"
            para="Created by valuation experts for valuation professionals."
        />
        <WhyBoxes
            heading="Dedicated to your success"
            para="24/7 support and multi-language capabilities to support your  needs."
        />
      </div>
    </section>
  );
}

export default Why;
