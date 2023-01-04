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

import SVGShapeBaner from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/1-baner-startowy/banerowe";
import SVGShapeOpisu from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/3-opis-i-rysunek/nad-poziomy";
import SVGShapeNadGodzinami from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/5-godziny-otwarcia/nad-godziny-otwarcia";
import SVGShapeWalczmy from "../../components/dedykowane-do-strony-konkretnej/.strona-glowna-infiniti/6-walczmy-razem/walczmy-razem";

import Image from "next/image";

//
//
//
// Dorób classy dla każdego elementu   &   przypisz je placeholderom przedstawiajacymi fragmnenty daneo fragmentu (np. strzalki, foty i obramowki galerii carousel fot miejsc)
//
//
//
const a = () => {
  return (
    <div className={styles["layout__strona-glowna__cala-strona"]}>
      <div className={styles["layout__strona-glowna__baner-startowy"]}>
        <SVGShapeBaner
          className={
            styles["layout__strona-glowna__baner-startowy--paski-i-ikonki"]
          }
        />
        <div
          className={
            styles["layout__strona-glowna__baner-startowy--fota-w-tle"]
          }
        >
          <Image
            src={`/images/.design-pattern-placeholders/pietro1.jpg`}
            alt={`nie pyklo zdjecie`}
            // height={1004}
            // width={2004}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles["layout__strona-glowna__galeria"]}>
        <CarouselFotyINFINITI />
        {/* <div className={`${styles[""]} ${styles[""]}`}></div> */}
        <div
          className={`${styles["layout__strona-glowna__galeria__ksztalty-kolorowe-w-tle--lewy"]} ${styles[""]}`}
        ></div>
        <div
          className={`${styles["layout__strona-glowna__galeria__ksztalty-kolorowe-w-tle--prawy"]} ${styles[""]}`}
        ></div>
      </div>
      <div className={styles["layout__strona-glowna__opis-i-rysunek"]}>
        <div
          className={styles["layout__strona-glowna__opis-i-rysunek__rysunek"]}
        >
          <Image
            src={`/images/.design-pattern-placeholders/pietro1.jpg`}
            alt={`nie pyklo zdjecie`}
            height={200}
            width={100}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles["layout__strona-glowna__opis-i-rysunek__shape"]}>
          <SVGShapeOpisu />
        </div>

        <div
          className={`${styles["layout__strona-glowna__opis-i-rysunek__opis"]}`}
        >
          Opis infiniti / zajęcia konkretnego / sali Contrary to popular belief,
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the m
        </div>
      </div>
      <div className={styles["layout__strona-glowna__poziomy"]}>
        <div className={styles["layout__strona-glowna__poziomy__mapa"]}>
          <CarouselPoziomy />
        </div>
      </div>
      <div className={styles["layout__strona-glowna__godziny-otwarcia"]}></div>
      <div className={styles["layout__strona-glowna__walczmy-razem"]}></div>

      <SVGShapeNadGodzinami className={styles["layout__strona-glowna__"]} />
      <SVGShapeWalczmy className={styles["layout__strona-glowna__"]} />
    </div>
  );
};
export default a;
