// //
// //  Navbar = Nawigacja (np. na górze ekranu) mojej strony.
// //
////
////
////~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
////
////       A.1. parent rozdział nr 1
// //
// //           A.1.1. child rozdział nr 1
// //
////~~ B.  Historyjka druga ...
////

// 1. Importujesz componenty         -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// ||
// 1.B. Piszesz już kod oryginalny   -    Bo gdzieś musisz w końcu zacząć go pisac. Nie można dzielić na componenty w nieskończoność
// 2. Containeruję                   -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery           -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

// import styles from "src/styles/sass/styles-all.module.scss";
// import Link from "next/link";
// import {LogoComponent, ButtonStronaGlownaComponent,  ButtonPodstronaPierwsza, ButtonPodstronaDruga} from "...COMPONENT folder..."

// const Navbar = () => {
//   return (
//
//     <div className={styles["layout__navbar__caly-container"]}>   <- NIEKONIECZNIE równy całemu obszarowi paska \/. czasem więcej niż on
//
//             <nav className={styles["layout__navbar__obszar-całego-paska-nawigacji"]}>
//
//                  <div className={styles["layout__navbar__fragment-1-np-logo-firmy"]}>
//
//                          <LogoComponent/>
//                          ||
//                           Kod oryginalny, bo bez sensu go już dalej dzielić na dalsze componenty
//
//                  </div>
//
//                  <div className={styles["layout__navbar__fragment-2-np-button-strona-glowna"]}>
//
//                          <Link href="/strona-glowna">
//                                      <ButtonStronaGlownaComponent/>
//                                       ||
//                                       Kod oryginalny, bo bez sensu go już dalej dzielić na dalsze componenty
//                          </Link>
//
//                  </div>
//
//                  <div className={styles["layout__navbar__fragment-3-np-podstrona-1"]}>
//
//                          <Link href="/podstrona1">
//                                      <ButtonPodstronaPierwsza/>
//                                       ||
//                                       Kod oryginalny, bo bez sensu go już dalej dzielić na dalsze componenty
//                          </Link>
//
//                  </div>
//
//                  <div className={styles["layout__navbar__fragment-4-np-podstrona-2"]}>
//
//                          <Link href="/podstrona2">
//                                      <ButtonPodstronaDruga/>
//                                       ||
//                                       Kod oryginalny, bo bez sensu go już dalej dzielić na dalsze componenty
//                          </Link>
//
//                  </div>
//
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
