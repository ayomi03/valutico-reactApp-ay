import React from "react";
import styles from "./Partners.module.css";
import Heading from "../SectionHeading/Heading";
import PartnerImages from "./PartnerImages";
import Allinial from "../../assets/allinialGlob.png";
import Bakertilly from "../../assets/bakertilly.png";
import BcrhAss from "../../assets/bcrhAss.png";
import CDIGlobal from "../../assets/cdiGlobal.png";
import GlobaMA from "../../assets/globaMA.png";
import Praxity from "../../assets/praxity.png";
import RodlPart from "../../assets/rodlPart.png";
import StandarChart from "../../assets/standardChart.png";

function Partners() {
  return (
    <section className={styles.partners}>
      <Heading
        heading="Trusted by Hundreds of Financial Firms in 75 Countries"
        para="Our team of more than 50 employees is globally distributed and serves both national and international clients in over 75 countries."
      />

      <div className={styles.partnersCtn}>
        <PartnerImages imgSrc={RodlPart} />
        <PartnerImages imgSrc={StandarChart} />
        <PartnerImages imgSrc={Allinial} />
        <PartnerImages imgSrc={BcrhAss} />
        <PartnerImages imgSrc={Allinial} />
        <PartnerImages imgSrc={CDIGlobal} />
        <PartnerImages imgSrc={GlobaMA} />
        <PartnerImages imgSrc={Praxity} />
        <PartnerImages imgSrc={Bakertilly} />
        <PartnerImages imgSrc={RodlPart} />
        <PartnerImages imgSrc={RodlPart} />
        <PartnerImages imgSrc={RodlPart} />
      </div>
    </section>
  );
}

export default Partners;
