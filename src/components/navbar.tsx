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
      <Link href="/">
        <a
          className={
            styles["layout-strona-glowna__navbar-gorny--logo-infiniti"]
          }
        >
          {"LOGO / STR.G."}
        </a>
      </Link>
      <Link href="/o-nas">
        <a className={styles["layout-strona-glowna__navbar-gorny--o-nas"]}>
          O NAS
        </a>
      </Link>
      <Link href="/infiniti-medical">
        <a
          className={
            styles["layout-strona-glowna__navbar-gorny--infiniti-medical"]
          }
        >
          INFINITI MEDICAL
        </a>
      </Link>
      <Link href="/galeria">
        <a className={styles["layout-strona-glowna__navbar-gorny--galeria"]}>
          GALERIA
        </a>
      </Link>
      <Link href="/kadra">
        <a className={styles["layout-strona-glowna__navbar-gorny--kadra"]}>
          KADRA
        </a>
      </Link>
      <Link href="/cennik">
        <a className={styles["layout-strona-glowna__navbar-gorny--cennik"]}>
          CENNIK
        </a>
      </Link>
      <Link href="/grafik">
        <a className={styles["layout-strona-glowna__navbar-gorny--grafik"]}>
          GRAFIK
        </a>
      </Link>
      <Link href="/do-pobrania">
        <a
          className={styles["layout-strona-glowna__navbar-gorny--do-pobrania"]}
        >
          DO POBRANIA
        </a>
      </Link>
      <Link href="/kontakt">
        <a className={styles["layout-strona-glowna__navbar-gorny--kontakt"]}>
          KONTAKT
        </a>
      </Link>

      {/* <Link href="/A"> Strona A</Link>
      <Link href="/B"> Strona B</Link>
      <Link href="/C"> Strona C</Link> */}
    </nav>
  );
};

export default Navbar;
