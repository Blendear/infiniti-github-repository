//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

import CarouselFotyINFINITI from "../../components/dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-foty-infiniti/CarouselFotyINFINITI";
import CarouselPoziomy from "../../components/dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carpusel-poziomy/CarouselPoziomy";
const a = () => {
  return (
    <div>
      <h1 className={styles.eksperymentalny}> strona glowna </h1>;
      <CarouselFotyINFINITI />
      <CarouselPoziomy />
    </div>
  );
};
export default a;
