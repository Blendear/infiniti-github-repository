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

import CarouselFotyINFINITI from "../../components/strona-glowna/0/2-carousel-foty-infiniti/CarouselFotyINFINITI";
import CarouselPoziomy from "../../components/strona-glowna/0/4-carpusel-poziomy/CarouselPoziomy";
import TytulINFINITI from "../../components/strona-glowna/0/tytul-infiniti/tytul-podstrony";
import ZmienneStartoweTlo from "../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import ZmienneStartoweLogo from "../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import Image from "next/image";
import SVGCoTuZnajdziesz1 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-1";
// hook1 - da sie jakos zrobic dynamiczne svg? /\
import SVGCoTuZnajdziesz2 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-2";
import SVGCoTuZnajdziesz3 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-3";
import SVGCoTuZnajdziesz4 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-4";
import SVGCoTuZnajdziesz5 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-5";
import SVGCoTuZnajdziesz6 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-6";
import SVGCoTuZnajdziesz7 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-7";
import SVGCoTuZnajdziesz8 from "../../components/strona-glowna/0/co-tu-znajdziesz/svg-8";
import GodzinyOtwarciaKS from "../../components/strona-glowna/0/5-godziny-otwarcia/godziny-otwarcia";
//
import SVGWiecejArrowRight from "../../components/strona-glowna/0/2-carousel-foty-infiniti/svg-wiecej";
import SVGNazwy from "../../components/strona-glowna/0/2-carousel-foty-infiniti/svg-nazwy";
import Partnerzy from "../../components/strona-glowna/0/partnerzy/partnerzy.jsx/partnerzy";

import { useState } from "react";

import MenuModal from "../../components/wszechobecne-na-roznych-podstronach/menu-modal/menu-modal";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../store/redux/store-redux";

//
//
// Dorób classy dla każdego elementu   &   przypisz je placeholderom przedstawiajacymi fragmnenty daneo fragmentu (np. strzalki, foty i obramowki galerii carousel fot miejsc)
//
//
//
const StronaGlowna = () => {
  // const [showMenuModal, setShowMenuModal] = useState(false);

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
          ? styles["layout__strona-glowna__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
      <ZmienneStartoweLogo logoPath="logo-INFINITI.jpg" />
      <div
        className={
          styles["layout__strona-glowna__cala-strona__tlo-nad-co-ty-znajdziesz"]
        }
      ></div>
      <div
        className={
          styles["layout__strona-glowna__cala-strona__tlo-nad-gallery"]
        }
      ></div>

      <button
        className={
          styles["layout__strona-glowna__cala-strona__kup-karnet-button"]
        }
      >
        KUP KARNET
      </button>
      <TytulINFINITI />
      <div className={styles["layout__strona-glowna__cala-strona__fota-klubu"]}>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/z-zewnatrz-klub/z-zewnatrz-klub.png`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={100}
          layout="fill"
          objectFit="cover"
        />
        {/* /\ TYLKO GDY samo zdjecie zmienias,z np. koło robisz, dzikei "border-radiu:50%;, 
          wtedy "className i Image'owi dodasz. ale inaczje, nic nie dodawaj */}

        {/* D:\Apka React JS\infiniti-stronka\public\images */}
      </div>
      <div
        className={
          styles["layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz"]
        }
      >
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-1"
            ]
          }
        >
          <SVGCoTuZnajdziesz1 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-1"
            ]
          }
        >
          tekst1
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-2"
            ]
          }
        >
          <SVGCoTuZnajdziesz2 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-2"
            ]
          }
        >
          {" "}
          tekst2
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-3"
            ]
          }
        >
          <SVGCoTuZnajdziesz3 />
        </div>

        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-3"
            ]
          }
        >
          {" "}
          tekst3
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-4"
            ]
          }
        >
          <SVGCoTuZnajdziesz4 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-4"
            ]
          }
        >
          tekst4
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-5"
            ]
          }
        >
          <SVGCoTuZnajdziesz5 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-5"
            ]
          }
        >
          tekst5
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-6"
            ]
          }
        >
          <SVGCoTuZnajdziesz6 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-6"
            ]
          }
        >
          tekst6
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-7"
            ]
          }
        >
          <SVGCoTuZnajdziesz7 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-7"
            ]
          }
        >
          tekst7
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-8"
            ]
          }
        >
          <SVGCoTuZnajdziesz8 />
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-8"
            ]
          }
        >
          tekst8
        </div>
      </div>

      <div
        className={
          styles["layout__strona-glowna__cala-strona__carousel-gallery"]
        }
      >
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-gallery--tekst-tytulowy"
            ]
          }
        >
          ZOBACZ CO TUTAJ NA CIEBIE CZEKA!
        </div>
        <CarouselFotyINFINITI />
        <button
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-gallery--nazwa-miejsca"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-gallery--nazwa-miejsca--tekst"
              ]
            }
          >
            NAZWA MIEJSCA
          </div>
          <div
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-gallery--nazwa-miejsca--svg-nazwy"
              ]
            }
          >
            <SVGNazwy />
          </div>
        </button>

        <button
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-gallery--wiecej-button"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-gallery--wiecej-button--tekst"
              ]
            }
          >
            WIĘCEJ O TYM MIEJSCU
          </div>
          <div
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-gallery--wiecej-button--svg-wiecej"
              ]
            }
          >
            <SVGWiecejArrowRight />
          </div>
        </button>
      </div>

      <CarouselPoziomy />

      <GodzinyOtwarciaKS />

      <Partnerzy />
    </div>
  );
};
export default StronaGlowna;
