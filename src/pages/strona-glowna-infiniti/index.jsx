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

//herehere03.01.2022--Velocity_2--PierwszaSesja--Hook1--Piszmy--Historyjkuję
//
//
//    2. Gromię i pieszczę - puste, kolorowe główne gridy ustal i ustaw, w tym dla image i svg's,
//    3. Gromię i pieszczę - upozycjoniuj w x,y i z images i svg's
//    4. Pieszczę - Poślij gońca o latest data do stronki   &    czy visual jest git, czy nie
//    5. Gromię - Prototype programuj
//    6. Pieszczę - Detale wizualne i data'owe programuj

import styles from "src/styles/sass/styles-all.module.scss";

import CarouselFotyINFINITI from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/2-carousel-foty-infiniti/CarouselFotyINFINITI";
import CarouselPoziomy from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/4-carpusel-poziomy/CarouselPoziomy";

import SVGShapePodBanerem from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/1-baner-startowy/banerowe";
import SVGShapeNadGodzinami from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/5-godziny-otwarcia/nad-godziny-otwarcia";
import SVGShapePodGodzinami from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/6-walczmy-razem/walczmy-razem";
import SVGShapeNadPoziomami from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/4-carpusel-poziomy/nad-poziomy";

import Image from "next/image";

const a = () => {
  return (
    <div className={styles["layout__strona-glowna__cala-strona"]}>
      <div className={styles["layout__strona-glowna__baner-startowy"]}>
        <SVGShapePodBanerem
          className={
            styles["layout__strona-glowna__baner-startowy--paski-i-ikonki"]
          }
        />
        <Image
          className={
            styles["layout__strona-glowna__baner-startowy--fota-w-tle"]
          }
          src={`/images/.design-pattern-placeholders/pietro1.jpg`}
          alt={`nie pyklo zdjecie`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles["layout__strona-glowna__galeria"]}>
        <CarouselFotyINFINITI className={styles["layout__strona-glowna__"]} />
      </div>
      <div className={styles["layout__strona-glowna__opis-i-rysunek"]}>
        <SVGShapeNadPoziomami className={styles["layout__strona-glowna__"]} />
      </div>
      <div className={styles["layout__strona-glowna__"]}></div>
      <div className={styles["layout__strona-glowna__"]}></div>
      <div className={styles["layout__strona-glowna__"]}></div>
      <SVGShapeNadGodzinami className={styles["layout__strona-glowna__"]} />
      <SVGShapePodGodzinami className={styles["layout__strona-glowna__"]} />

      <CarouselPoziomy className={styles["layout__strona-glowna__"]} />
    </div>
  );
};
export default a;
