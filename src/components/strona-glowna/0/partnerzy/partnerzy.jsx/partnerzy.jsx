// import SVGTytulINFINITI from "./svg-otoczka-nazwy";
import styles from "src/styles/sass/styles-all.module.scss";
import CarouselPartnerzy from "../../7-carousel-partnerzy/CarouselPartnerzy";
const Partnerzy = () => {
  return (
    <div className={styles["layout__strona-glowna__cala-strona__partnerzy"]}>
      <div
        className={
          styles["layout__strona-glowna__cala-strona__partnerzy--tytul-tekst"]
        }
      >
        PARTNERZY
      </div>
      <div
        className={
          styles["layout__strona-glowna__cala-strona__partnerzy--tytul-linia"]
        }
      ></div>
      <div
        className={
          styles["layout__strona-glowna__cala-strona__partnerzy--carousel"]
        }
      >
        <CarouselPartnerzy />
      </div>
    </div>
  );
};
export default Partnerzy;
