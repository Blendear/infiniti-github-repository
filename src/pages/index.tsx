//// TEMPLATE \/\/\/

////  Problemy do rozwiązania poniższymi rozdziałami liczbowymi:
////
////  A.  Śledzę upływ czasu real life
////
////       A.a. ...
// //
// //           1.  Moments.js library
// //
// //               1.1. Zaciągnięcie czasu dla Polski
// //
// //               1.2. Przerobienie danych zaciągniętyhc na ładny visual timer'a

//// TEMPLATE /\/\/\

import styles from "src/styles/sass/styles-all.module.scss";

const StronaD = () => {
  return (
    <div className={styles["layout-strona-glowna__cala-strona"]}>
      <div className={styles["layout-strona-glowna__navbar-gorny"]}>
        logo & navbar górny
      </div>
      <div
        className={
          styles["layout-strona-glowna__animowany-slide-in-fot-infiniti"]
        }
      >
        {"[ slide'y ]"}
      </div>

      <div className={styles["layout-strona-glowna__foty-marketingowe"]}>
        {"[ dwie foty ]"}
      </div>
      <div
        className={styles["layout-strona-glowna__poziomy-infiniti-tytul-gorny"]}
      >
        --- 4 pietra pelne wrazen ---
      </div>
      <div className={styles["layout-strona-glowna__poziomy-infiniti-levle"]}>
        poziomy infiniti
      </div>
      <div className={styles["layout-strona-glowna__efitness-app"]}>
        efitness app
      </div>
      <div className={styles["layout-strona-glowna__godziny-otwarcia"]}>
        godziny otwarcia
      </div>
      <div className={styles["layout-strona-glowna__partnerzy-tytul-gorny"]}>
        tytuł górny - partnerzy
      </div>
      <div
        className={styles["layout-strona-glowna__partnerzy-animowany-slide-in"]}
      >
        {"[ partnerzy ] "}
      </div>
      <div className={styles["layout-strona-glowna__newsletter"]}>
        newsletter
      </div>
    </div>
  );
};
export default StronaD;
