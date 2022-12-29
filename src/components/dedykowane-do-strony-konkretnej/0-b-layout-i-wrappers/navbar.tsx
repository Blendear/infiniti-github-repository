//
//  Navbar = Nawigacja (np. na górze ekranu) mojej strony
//
//// TEMPLATE \/\/\/ - hook1 - rozpisz

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

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles["layout-strona-glowna__navbar-gorny"]}>
      <Link href="/strona-glowna-infiniti">
        <a
          className={
            styles["layout-strona-glowna__navbar-gorny--logo-infiniti"]
          }
        >
          {"Domeczek  "}
        </a>
      </Link>
      <Link href="/dolacz-do-nas">
        <a className={styles["layout-strona-glowna__navbar-gorny--o-nas"]}>
          Dołącz do nas
        </a>
      </Link>
      <Link href="/medical">
        <a
          className={
            styles["layout-strona-glowna__navbar-gorny--infiniti-medical"]
          }
        >
          Medical
        </a>
      </Link>
      <Link href="/fitness">
        <a className={styles["layout-strona-glowna__navbar-gorny--galeria"]}>
          Fitness
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
