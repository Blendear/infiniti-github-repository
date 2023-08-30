// import SVGTytulINFINITI from "./svg-otoczka-nazwy";
import styles from "src/styles/sass/styles-all.module.scss";
import CarouselPartnerzy from "../../7-carousel-partnerzy/CarouselPartnerzy";
const Partnerzy = () => {
  return (
    <section
      className={styles["layout__strona-glowna__cala-strona__partnerzy"]}
    >
      <h6
        className={
          styles["layout__strona-glowna__cala-strona__partnerzy--tytul-tekst"]
        }
      >
        PARTNERZY
      </h6>
      <span
        className={
          styles["layout__strona-glowna__cala-strona__partnerzy--tytul-linia"]
        }
      ></span>
      <div
        className={
          styles["layout__strona-glowna__cala-strona__partnerzy--carousel"]
        }
      >
        <CarouselPartnerzy />
      </div>
    </section>
  );
};
export default Partnerzy;
