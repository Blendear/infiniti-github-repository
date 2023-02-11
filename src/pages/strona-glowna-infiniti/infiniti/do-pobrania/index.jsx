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

import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

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
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy"
          ]
        }
      >
        <div
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <div>zdjecie</div>
          <div>opis</div>
        </div>
        <div
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <div>zdjecie</div>
          <div>opis</div>
        </div>
        <div
          className={
            styles[
              "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--dokumenty--content-umowy-i-regulaminy--item"
            ]
          }
        >
          <div>zdjecie</div>
          <div>opis</div>
        </div>
      </div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-1"
          ]
        }
      >
        <Image
          src={`/images/.design-pattern-placeholders/pietro1.jpg`}
          alt={`nie pyklo zdjecie`}
          // height={1004}
          // width={2004}
          height={200}
          width={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-2"
          ]
        }
      >
        <Image
          src={`/images/.design-pattern-placeholders/pietro1.jpg`}
          alt={`nie pyklo zdjecie`}
          // height={1004}
          // width={2004}
          height={200}
          width={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-3"
          ]
        }
      >
        <Image
          src={`/images/.design-pattern-placeholders/pietro1.jpg`}
          alt={`nie pyklo zdjecie`}
          // height={1004}
          // width={2004}
          height={200}
          width={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div
        className={
          styles[
            "layout__infiniti-do-pobrania__cala-strona__tytuly-i-content-do-pobrania--logo--content-typy-plikow--item-4"
          ]
        }
      >
        <Image
          src={`/images/.design-pattern-placeholders/pietro1.jpg`}
          alt={`nie pyklo zdjecie`}
          // height={1004}
          // width={2004}
          height={200}
          width={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
export default DoPobrania;
