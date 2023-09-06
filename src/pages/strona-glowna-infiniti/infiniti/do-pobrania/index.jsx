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

// 1.A. Importujesz componenty       -    Z którego zbudujesz kod tej stornki. NIE piszesz tu całego oryginalnego kodu
// 2. Containeruję                   -    Tworzę 1 <div> główny i 1 dla każdego fragmentu danej strony
// 3. Style'uję containery           -    Po kolei copy pastujac classy z bliźniaczo nazwanego pliku CSS'owskiego

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import Link from "next/link";
import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

import { GrDocumentText } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
const DoPobrania = () => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  const dispatch = useAppDispatch();

  const handlerToggleMenuIsOpen = (event) => {
    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: false,
      })
    );
  };
  useEffect(() => {
    handlerToggleMenuIsOpen();
  }, []);

  return (
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["layout__infiniti-do-pobrania__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
      <ZmienneStartoweLogo logoPath="logo-INFINITI.jpg" />
      <div
        className={
          styles["layout__medical-cennik__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="DO POBRANIA" />
      </div>
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__tlo-calej-strony"]
        }
      ></div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--tytul"
          ]
        }
      >
        LOGO
        {/* <bComponent /> */}
      </div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--tytul"
          ]
        }
      >
        DOKUMENTY
        {/* <bComponent /> */}
      </div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--linia-srodkowa"
          ]
        }
      >
        {/* <bComponent /> */}
      </div>
      <ul
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy"
          ]
        }
      >
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <CgFileDocument />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Regulamin_Infiniti_Fitness_Club_2023.pdf"
          >
            <a target="_blank">Regulamin INFINITI</a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <CgFileDocument />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Polityka_Prywatności_Fit-Food-Group_01.2023.pdf"
          >
            <a target="_blank">Polityka prywatności</a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <CgFileDocument />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/OSWIADCZENIE_RODZICA_OPIEKUNA.pdf"
          >
            <a target="_blank">Zgoda nieletniego</a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <CgFileDocument />
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Wzor-oswiadczenia-o-odstapieniu-od-umowy-zawartej-na-odleglosc.pdf"
          >
            <a target="_blank">Wzór odstąpienia od umowy</a>
          </Link>
        </li>
      </ul>
      {/* //       _._. Loga */}
      <ul
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow"
          ]
        }
      >
        {/* //           _._._. INFINITI */}

        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--infiniti-tytul"
            ]
          }
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/zmienne-startowe-logo-i-fota/logo-INFINITI.jpg`}
            alt={`Logo INFINITI`}
            layout="fill"
            objectFit="contain"
            priority
            loading="eager"
          />
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-9"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/infiniti/jpg.jpg"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/jpg.png`}
                alt={`Obrazek oznaczający pobranie pliku JPG`}
                layout="fill"
                objectFit="contain"
                quality={20}
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-10"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/infiniti/png.png"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/png.png`}
                alt={`Obrazek oznaczający pobranie pliku PNG`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-11"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/infiniti/pdf.pdf"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/pdf.png`}
                alt={`Obrazek oznaczający pobranie pliku PDF`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-12"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/infiniti/eps.zip"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/eps.png`}
                alt={`Obrazek oznaczający pobranie pliku EPS`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        {/* //           _._._. INFINITI - Medical */}
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--fitness-tytul"
            ]
          }
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/zmienne-startowe-logo-i-fota/logo-Medical.jpg`}
            alt={`Logo INFINITI Medical`}
            layout="fill"
            objectFit="contain"
            quality={20}
            priority
            loading="eager"
          />
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-5"
            ]
          }
        >
          <Link
            // target="_blank"
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/medical/jpg.jpg"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/jpg.png`}
                alt={`Obrazek oznaczający pobranie pliku JPG`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-6"
            ]
          }
        >
          <Link
            // target="_blank"
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/medical/png.png"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/png.png`}
                alt={`Obrazek oznaczający pobranie pliku PNG`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-7"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/medical/pdf.pdf"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/pdf.png`}
                alt={`Obrazek oznaczający pobranie pliku PDF`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-8"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/medical/eps.zip"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/eps.png`}
                alt={`Obrazek oznaczający pobranie pliku EPS`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        {/* //           _._._. INFINITI - Fitness */}
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--medical-tytul"
            ]
          }
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/zmienne-startowe-logo-i-fota/logo-Fitness.jpg`}
            alt={`Logo INFINITI Fitness`}
            layout="fill"
            objectFit="contain"
            priority
            loading="eager"
          />
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-1"
            ]
          }
        >
          <Link
            // target="_blank"
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/fitness/jpg.jpg"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/jpg.png`}
                alt={`Obrazek oznaczający pobranie pliku JPG`}
                layout="fill"
                objectFit="contain"
                quality={20}
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-2"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/fitness/png.png"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/png.png`}
                alt={`Obrazek oznaczający pobranie pliku PNG`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-3"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/fitness/pdf.pdf"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/pdf.png`}
                alt={`Obrazek oznaczający pobranie pliku PDF`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
        <li
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-4"
            ]
          }
        >
          <Link
            download
            href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/fitness/eps.zip"
          >
            <a target="_blank">
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/ikony-wzorcowe/eps.png`}
                alt={`Obrazek oznaczający pobranie pliku EPS`}
                layout="fill"
                objectFit="contain"
                priority
                loading="eager"
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default DoPobrania;

//~~ _. Do Pobrania - Loga & Dokumenty
//
//       _._. Loga
//
//           _._._. INFINITI
//
//           _._._. INFINITI - Medical
//
//           _._._. INFINITI - Fitness
//
//       _._. Dokumenty
//
//       _._. 1 z 3 wariantów stron e-trenera (conditionally render'owane zależnie od parametru "method" parameter z query string'u)
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
