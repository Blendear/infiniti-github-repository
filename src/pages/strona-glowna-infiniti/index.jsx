/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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

const stronaGlownaCss = {
  container: css({}),
  buttonInfinitiApp: css({
    width: "12rem",
    aspectRatio: "5/1.8",
    /* use this class as a template   ->   layout__fitness-cennik__cala-strona__kup-karnet-button-cennik-fitness */
    // backgroundColor: "purple",
  }),
};

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
      <Link href="https://infiniti-kk-cms.efitness.com.pl/kup-karnet">
        <a
          className={
            styles["layout__strona-glowna__cala-strona__kup-karnet-button"]
          }
          target="_blank"
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/btn-wywolywacz/kup-karnet.png`}
            alt={`Biały napis "KUP KARNET" na niebiesko-fioletowym tle`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            quality={100}
          />
        </a>
      </Link>

      {/* Uncomment \/ after INFINITI App goes live */}

      {/* <Link href="/infiniti-app?method=qr">
        <a css={stronaGlownaCss.buttonInfinitiApp}>
          <p>INFINITI APP</p>
        </a>
      </Link> */}

      <TytulINFINITI />
      <div className={styles["layout__strona-glowna__cala-strona__fota-klubu"]}>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/z-zewnatrz-klub/z-zewnatrz-klub.png`}
          alt={`Widok klubu INFINITI - z zewnątrz, od strony ulicy, w słoneczny dzień. Przed klubem widać drzewa i zaparkowane pod nimi samochody.`}
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
        />
      </div>
      <ul
        className={
          styles["layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz"]
        }
      >
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-1"
            ]
          }
        >
          <SVGCoTuZnajdziesz1 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-1"
            ]
          }
        >
          FIZJOTERAPIA
          <br /> & NATUROTERAPIA
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-7"
            ]
          }
        >
          <SVGCoTuZnajdziesz2 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-7"
            ]
          }
        >
          SQUASH
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-5"
            ]
          }
        >
          <SVGCoTuZnajdziesz3 />
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-5"
            ]
          }
        >
          YOGA
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-4"
            ]
          }
        >
          <SVGCoTuZnajdziesz4 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-4"
            ]
          }
        >
          SZTUKI WALKI
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-6"
            ]
          }
        >
          <SVGCoTuZnajdziesz5 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-6"
            ]
          }
        >
          ZAJĘCIA GRUPOWE
          <br />
          DLA KAŻDEGO
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-2"
            ]
          }
        >
          <SVGCoTuZnajdziesz6 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-2"
            ]
          }
        >
          SIŁOWNIA <br />& FITNESS
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-3"
            ]
          }
        >
          <SVGCoTuZnajdziesz7 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-3"
            ]
          }
        >
          SAUNA <br />& WELLNESS
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-8"
            ]
          }
        >
          <SVGCoTuZnajdziesz8 />
        </li>
        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-8"
            ]
          }
        >
          DOŚWIADCZENI <br />
          DIETETYCY
        </li>
      </ul>

      <section
        className={
          styles["layout__strona-glowna__cala-strona__carousel-gallery"]
        }
      >
        <h2
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-gallery--tekst-tytulowy"
            ]
          }
        >
          ZOBACZ CO TUTAJ NA CIEBIE CZEKA!
        </h2>
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
          <h3
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
          </h3>
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
      </section>
      <CarouselPoziomy />
      <GodzinyOtwarciaKS />
      <Partnerzy />
      <CallButton />
    </div>
  );
};
export default StronaGlowna;
