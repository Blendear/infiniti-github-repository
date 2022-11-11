//
//~~ A.  Historyjka - Zebranie componentów strony głównej w jednym pliku & wyświetlenie wszystkich
//

import styles from "src/styles/sass/styles-all.module.scss";

import Image from "next/image";

import SlajdyFot from "../components/1-strona-glowna/1-1-slajdy-fot";
import DwieFotyMarketingowe from "../components/1-strona-glowna/1-2-dwie-foty-marketingowe copy";
import CzteryPietra from "../components/1-strona-glowna/1-3-cztery-pietra";
import PoziomyInfiniti from "../components/1-strona-glowna/1-4-poziomy-infiniti";
import EfitnessStronaGlowna from "../components/1-strona-glowna/1-5-efitness";
import GodzinyOtwarcia from "../components/1-strona-glowna/1-6-godziny-otwarcia";
import PartnerzyTytul from "../components/1-strona-glowna/1-7-partnerzy-tytul";
import PartnerzyKonkretni from "../components/1-strona-glowna/1-8-partnerzy-konkretni";
import NewsletterStronyGlownej from "../components/1-strona-glowna/1-9-newsletter";

const StronaStronaGlowna = () => {
  return (
    <div className={styles["layout-strona-glowna__cala-strona"]}>
      <SlajdyFot />
      <DwieFotyMarketingowe />
      <CzteryPietra />
      <PoziomyInfiniti />
      <EfitnessStronaGlowna />
      <GodzinyOtwarcia />
      <PartnerzyTytul />
      <PartnerzyKonkretni />
      <NewsletterStronyGlownej />
    </div>
  );
};
export default StronaStronaGlowna;
