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
import CallButton from "../../components/strona-glowna/0/call-i-messenger/call-btn";
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
// import { wybranyPoziomIMiejsceActions } from "../../../../store/redux/store-redux";

import Link from "next/link";
//
import { CSSProperties } from "react";

import CircleLoader from "react-spinners/CircleLoader";

import { carouselData } from "../../components/strona-glowna/0/2-carousel-foty-infiniti/Data";
//
// Dorób classy dla każdego elementu   &   przypisz je placeholderom przedstawiajacymi fragmnenty daneo fragmentu (np. strzalki, foty i obramowki galerii carousel fot miejsc)
//
//
//

const StronaGlowna = () => {
  // const [showMenuModal, setShowMenuModal] = useState(false);

  // //spinner
  // const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState("#ffffff");

  //
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );
  const reduxStatePoziomIMiejsceAktualne = useAppSelector(
    (state) => state.wybranyPoziomIMiejsceReducer
  );
  // let slowoWyswietlane = reduxStatePoziomIMiejsceAktualne.miejsce;
  // console.log(slowoWyswietlane);
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
        <Link
          // target="_blank"
          download
          href="https://infiniti-kk-cms.efitness.com.pl/kup-karnet"
        >
          <a target="_blank">KUP KARNET</a>
        </Link>
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
          priority
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
          FIZJOTERAPIA
          <br /> & NATUROTERAPIA
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
          SQUASH
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
          YOGA <br />& MEDYTACJA
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
          MMA & BJJ
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
          ZAJĘCIA GRUPOWE
          <br />
          DLA KAŻDEGO
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
          SIŁOWNIA <br />& FITNESS
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
          SAUNA <br />& WELLNESS
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
          DOŚWIADCZENI <br />
          DIETETYCY
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
        {/* <div
          className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-carousel"]} ${styles["carousel-foty-infiniti"]} ${styles["layout__strona-glowna__cala-strona__carousel-gallery--loader"]}`}
        >
          <CircleLoader
            color="#09adca"
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
            }}
            size={"20vw"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div> */}
        <button
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-gallery--nazwa-miejsca"
            ]
          }
        >
          {/* ... */}
          <div
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-gallery--nazwa-miejsca--tekst"
              ]
            }
          >
            {/* {`${reduxStatePoziomIMiejsceAktualne.miejsce
              .toUpperCase()
              .replace(/-/g, " ")}`} */}

            {/*  \/ znajduje miejsce o adekwatnej nazwie & używa jego property "wysiwetlanaNazwa" - przez chujowa architkeutre wstepna musialem dwa osobne properties zrobic*/}

            {carouselData
              .find(
                (miejsce) =>
                  miejsce.nazwaMiejsca ===
                  reduxStatePoziomIMiejsceAktualne.miejsce
              )
              .wyswietlanaNazwa.toUpperCase()}
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

        {/* <button
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
        </button> */}
      </div>

      <CarouselPoziomy />

      <GodzinyOtwarciaKS />

      <Partnerzy />
      <CallButton />
    </div>
  );
};
export default StronaGlowna;
