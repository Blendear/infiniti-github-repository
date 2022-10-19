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
    <div>
      <nav className={styles.navbar}>
        <div className={styles["parent-Y"]}>
          parent Y<div className={styles["child-X"]}> child x</div>
        </div>

        {/* 
        
        
        









        
        
        
        .*/}
        <h1> Logo </h1>
        <Link href="/"> Strona Główna</Link>
        <Link href="/A"> Strona A</Link>
        <Link href="/B"> Strona B</Link>
        <Link href="/C"> Strona C</Link>
      </nav>
    </div>
  );
};

export default Navbar;
