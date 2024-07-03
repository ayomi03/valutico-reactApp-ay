import React from "react";
import Heading from "../SectionHeading/Heading";
import styles from "./Why.module.css";
import Boxes from "./Boxes";

function Why() {
  return (
    <section className={styles.why}>
      <Heading
        dark
        heading="Why Valutico?"
        para="An award-winning fintech providing a range of company valuation solutions, Valutico provides the financial services industry and valuation experts with data-driven tools."
      />

      <div className={styles.boxCtn}>
        <Boxes
            heading="Secure"
            para="Private by default, creating a safe space around your projects and your data."
            why
        />
        <Boxes
            heading="Reliable"
            para="Created by valuation experts for valuation professionals."
            why
        />
        <Boxes
            heading="Dedicated to your success"
            para="24/7 support and multi-language capabilities to support your  needs."
            why
        />
      </div>
    </section>
  );
}

export default Why;
