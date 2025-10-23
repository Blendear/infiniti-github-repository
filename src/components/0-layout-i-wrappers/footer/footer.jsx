// //
// //  Footer = Dopisek na dole mojej strony (np. kontakt, copyright etc.)
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

import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../../store/redux/hooks";
import { BsCardChecklist } from "react-icons/bs";
import { BsCircle, BsTelephone } from "react-icons/bs";
import { AiOutlineBorder, AiOutlineInstagram } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { VscCommentDiscussion } from "react-icons/vsc";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";

// https://instagram.com/infiniti.fitness.club
// import { IoDocumentOutline } from "react-icons/io";
// import {aComponent, bComponent} from "...COMPONENT folder..."

const Footer = () => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  return (
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["footer__caly-container"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ul className={styles["footer__honorowane-karty"]}>
        <li className={styles["footer__honorowane-karty--tytul"]}>
          <BsCardChecklist color="white" />
          <div>HONOROWANE KARTY</div>
        </li>
        <li className={styles["footer__honorowane-karty--karta"]}>
          <BsCircle color="white" />
          <div>LUX MED</div>
        </li>
        <li className={styles["footer__honorowane-karty--karta"]}>
          <BsCircle color="white" />
          <div>Multisport</div>
        </li>
        <li className={styles["footer__honorowane-karty--karta"]}>
          <BsCircle color="white" />
          <div>FitProfit</div>
        </li>
        <li className={styles["footer__honorowane-karty--karta"]}>
          <BsCircle color="white" />
          <div>Medicover Sport</div>
        </li>
        <li className={styles["footer__honorowane-karty--karta"]}>
          <BsCircle color="white" />
          <div>PZU Sport</div>
        </li>
        <li className={styles["footer__honorowane-karty--karta"]}>
          <BsCircle color="white" />
          <div>Gymsteer</div>
        </li>
      </ul>
      <ul className={styles["footer__dokumenty"]}>
        <li className={styles["footer__dokumenty--tytul"]}>
          <CgFileDocument />
          <div>DOKUMENTY</div>
        </li>
        <li className={styles["footer__dokumenty--karta"]}>
          <AiOutlineBorder color="white" />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Regulamin_Infiniti_2024.pdf"
          >
            <a target="_blank">Regulamin INFINITI</a>
          </Link>
        </li>
        <li className={styles["footer__dokumenty--karta"]}>
          <AiOutlineBorder color="white" />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Polityka_Prywatności_Fit-Food-Group_01.2023.pdf"
          >
            <a target="_blank">Polityka prywatności</a>
          </Link>
        </li>
        <li className={styles["footer__dokumenty--karta"]}>
          <AiOutlineBorder color="white" />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/OSWIADCZENIE_RODZICA_OPIEKUNA.pdf"
          >
            <a target="_blank">Zgoda nieletniego</a>
          </Link>
        </li>
        <li className={styles["footer__dokumenty--karta"]}>
          <AiOutlineBorder color="white" />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Wzor-oswiadczenia-o-odstapieniu-od-umowy-zawartej-na-odleglosc.pdf"
          >
            <a target="_blank">Wzór odstąpienia od umowy</a>
          </Link>
        </li>
      </ul>
      <ul className={styles["footer__kontakt"]}>
        <li className={styles["footer__kontakt--tytul"]}>
          <VscCommentDiscussion color="white" />
          <div>WIĘCEJ O NAS</div>
        </li>
        <a href="tel:+48884848808" className={styles["footer__kontakt--karta"]}>
          <div>{"(+48) 88 48 48 808"}</div>
        </a>

        <a
          href="mailto:info@infiniti-fit.pl"
          className={styles["footer__kontakt--karta"]}
        >
          info@infiniti-fit.pl{" "}
        </a>
        <ul className={styles["footer__kontakt--sociale"]}>
          <Link href="https://www.facebook.com/fitness.club.INFINITI">
            <a>
              <SlSocialFacebook />
            </a>
          </Link>
          <Link href="https://www.youtube.com/watch?v=rhuTosgeXok&ab_channel=INFINITIRecepcja">
            <a>
              <SlSocialYoutube />
            </a>
          </Link>
          <Link href="https://instagram.com/infiniti.fitness.club ">
            <a>
              <AiOutlineInstagram />
            </a>
          </Link>
        </ul>
      </ul>
      <div className={styles["footer__copyright"]}>© 2023 - INFINITI</div>
      <div className={styles["footer__link-do-tworcow"]}>
        Images and icons by Tobias Cibis & vextok, macrovectora and
        imaginationlol on Freepik
      </div>
    </div>
  );
};
export default Footer;

//
//
// Dorób classy dla każdego elementu   &   przypisz je placeholderom przedstawiajacymi fragmnenty daneo fragmentu (np. strzalki, foty i obramowki galerii carousel fot miejsc)
//
//
//
