/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
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
import { ModalPotwierdzajacyAkceptacjeCookies } from "../../features/e-trener";

const colorPurple = "#a22cff";
const colorBlue = "#22c1c3";

const gradientCrossbrowser = (backupColor, gradientData) => {
  return {
    backgroundColor: `${backupColor}`,
    background: `-moz-linear-gradient(${gradientData})`,
    background: `-webkit-linear-gradient(${gradientData})`,
    background: `linear-gradient(${gradientData})`,
  };
};

const glowAnimationPortrait = keyframes({
  "0%": {
    boxShadow: "0 0 0 0 rgba(255,255,255,0.7)",
  },
  "100%": {
    boxShadow: "0 0 20px 5px rgba(255,255,255,0)",
  },
});

const glowAnimationLandscape = keyframes({
  "0%": {
    boxShadow: "0 0 0 0 rgba(255,255,255,0.7)",
  },
  "100%": {
    boxShadow: "0 0 2.5vw 5px rgba(255,255,255,0)",
  },
});

const stronaGlownaCss = {
  container: css({}),

  buttonSpecial: (firstColor, secondColor) =>
    css([
      gradientCrossbrowser(
        firstColor,
        `222deg, ${firstColor} 0%, ${secondColor} 100%`,
      ),
      {
        gridRow: "r-2 / r-3",
        width: "33vw",
        maxWidth: "18rem",
        aspectRatio: "5/1.8",
        margin: "40px 0",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        border: "none",
        backgroundColor: "#09adca",
        fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
        fontWeight: "bold",
        textShadow: "0 0 0.3rem #381b00",
        boxShadow: "0 0 5px 1px rgb(0,0,0,0.35)",
        transition: "all 1s",
        cursor: "pointer",
        textDecoration: "none",

        "@media (max-width: 320px)": {
          width: "36vw",
        },

        "@media (max-width: 450px)": {
          margin: "25px 0",
        },

        "&:hover": {
          ...gradientCrossbrowser(
            secondColor,
            `222deg, ${secondColor} 0%, ${firstColor} 100%`,
          ),
          transition: "all 0.5s ease-out",
        },

        "& > p": {
          filter: "drop-shadow(0 0 0.3rem rgb(0,0,0,0.35))",
        },
      },
    ]),

  newLabel: css({
    position: "absolute",
    zIndex: "1",
    "-ms-transform": "translate(40px, -30px)",
    "-webkit-transform": "translate(40px, -30px)",
    "-moz-transform": "translate(40px, -30px)",
    "-o-transform": "translate(40px, -30px)",
    transform: "translate(40px, -30px)",
    padding: "0.25rem 0.75rem",
    backgroundColor: "white",
    fontSize: "clamp(0.9rem, 2.75vw, 1.4rem)",
    color: "black",
    textShadow: "none",
    animation: `${glowAnimationPortrait} 1s ease-in-out infinite alternate`,

    "@media (max-width: 390px)": {
      "-ms-transform": "translate(33px, -25px)",
      "-webkit-transform": "translate(33px, -25px)",
      "-moz-transform": "translate(33px, -25px)",
      "-o-transform": "translate(33px, -25px)",
      transform: "translate(33px, -25px)",
    },

    "@media (min-width: 500px)": {
      "-ms-transform": "translate(62px, -35px)",
      "-webkit-transform": "translate(62px, -35px)",
      "-moz-transform": "translate(62px, -35px)",
      "-o-transform": "translate(62px, -35px)",
      transform: "translate(62px, -35px)",
    },

    "@media (orientation: landscape)": {
      animation: `${glowAnimationLandscape} 1s ease-in-out infinite alternate`,
      "-webkit-animation": `${glowAnimationLandscape} 1s ease-in-out infinite alternate`, // Adding -webkit- prefix
    },
  }),
};

const heroCss = {
  wrapper: css({
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    gridRow: "r-4 / r-5",
    gridColumn: "c-1 / c-12",
  }),

  backgroundImage: css({
    position: "absolute",
    inset: 0,
    zIndex: 0,
  }),

  overlay: css({
    position: "absolute",
    inset: 0,
    zIndex: 1,
  }),

  content: css({
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr auto auto 1fr",
    justifyItems: "center",
    textAlign: "center",
    color: "white",
  }),

  titleContainer: css({
    gridRow: 2,
    width: "clamp(150px, 40vw, 600px)",
    position: "relative",
    aspectRatio: "2.5314254484/1",

    "@media (max-width: 600px)": {
      width: "70vw",
      filter: "drop-shadow(0 0 0.3rem rgb(0,0,0,0.5))",
    },
  }),

  buttonsContainer: css({
    gridRow: 3,
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "5rem",
    marginTop: "8rem",

    "@media (max-width: 600px)": {
      display: "unset",

      "& > a:first-of-type": {
        marginBottom: "2rem",
      },
    },
  }),

  buttonSpecial: (variant) => {
    const firstColor = "#3C9FDB";
    const secondColor = "#ffffffff";

    const isA = variant === "A";

    return css([
      {
        userSelect: "none",
        gridRow: "r-2 / r-3",
        width: "clamp(200px, 20vw, 15rem)",
        maxWidth: "18rem",
        aspectRatio: "5/1.8",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        border: `2px solid ${firstColor}`,
        borderRadius: "50px",
        backgroundColor: isA ? secondColor : firstColor,
        color: isA ? firstColor : secondColor,
        fontSize: "clamp(1.75rem, 3.5vw, 2.1rem)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        textDecoration: "none",

        "@media (max-width: 600px)": {
          // width: "max-content",
          // maxWidth: "none",
          // aspectRatio: "initial",
          // padding: "1.5rem 0",
          fontSize: "clamp(1.7rem, 3.5vw, 2.1rem)",
        },

        "&:hover": {
          backgroundColor: isA ? firstColor : secondColor,
          color: isA ? secondColor : firstColor,
        },
      },
    ]);
  },
};

const StronaGlowna = () => {
  // const [showMenuModal, setShowMenuModal] = useState(false);

  // //spinner
  // const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState("#ffffff");

  //
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen,
  );
  const reduxStatePoziomIMiejsceAktualne = useAppSelector(
    (state) => state.wybranyPoziomIMiejsceReducer,
  );
  // let slowoWyswietlane = reduxStatePoziomIMiejsceAktualne.miejsce;
  // console.log(slowoWyswietlane);
  const dispatch = useAppDispatch();

  const handlerToggleMenuIsOpen = (event) => {
    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: false,
      }),
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
      <section css={heroCss.wrapper}>
        <div css={heroCss.backgroundImage}>
          {/* <Image
            src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/z-zewnatrz-klub/2026-klub.png"
            alt="Widok klubu INFINITI z zewnątrz"
            layout="fill"
            objectFit="cover"
            priority
            // quality={100}
          /> */}
          <img
            src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/z-zewnatrz-klub/2026-klub.png"
            alt="Widok klubu INFINITI z zewnątrz"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            css={css({
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            })}
          />
        </div>

        <div css={heroCss.overlay} />

        <div css={heroCss.content}>
          <div css={heroCss.titleContainer}>
            <Image
              src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/z-zewnatrz-klub/2026-title.png"
              alt="INFINITI Centrum Zdrowia"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div css={heroCss.buttonsContainer}>
            <a
              css={heroCss.buttonSpecial("B")}
              href="https://infiniti-kk-cms.efitness.com.pl/kup-karnet"
            >
              <p>Kup karnet</p>
            </a>

            <Link href="/infiniti-app?method=qr">
              <a css={heroCss.buttonSpecial("A")}>
                <p>INFINITI App</p>
              </a>
            </Link>
          </div>
        </div>
      </section>

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
          <Link href="/cennik/fizjoterapia">
            <a>
              <SVGCoTuZnajdziesz1 />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-1"
            ]
          }
        >
          <Link href="/cennik/fizjoterapia">
            <a>Fizjoterapia</a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-7"
            ]
          }
        >
          <Link href="/cennik/fitness">
            <a>
              <Image
                src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/squash-tra.png"
                alt="Squash"
                layout="responsive"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-7"
            ]
          }
        >
          <Link href="/cennik/fitness">
            <a>Squash</a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-5"
            ]
          }
        >
          <Link href="/cennik/masaze">
            <a>
              <Image
                src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/masaze-tra.png"
                alt="Masaże"
                layout="responsive"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-5"
            ]
          }
        >
          <Link href="/cennik/masaze">
            <a>Masaże</a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-4"
            ]
          }
        >
          {/* <Link > */}
          <a href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
            <Image
              src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/sztuki-walki-tra.png"
              alt="Sztuki walki"
              layout="responsive"
              width={100}
              height={100}
            />
          </a>
          {/* </Link> */}
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-4"
            ]
          }
        >
          {/* <Link href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec"> */}
          <a href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
            Sztuki walki
          </a>
          {/* </Link> */}
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-6"
            ]
          }
        >
          <Link href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
            <a>
              <Image
                src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/z-grupowe-tra.png"
                alt="Zajęcia grupowe"
                layout="responsive"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-6"
            ]
          }
        >
          <Link href="https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec">
            <a>Zajęcia grupowe</a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-2"
            ]
          }
        >
          <Link href="/cennik/fitness">
            <a>
              <Image
                src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/silownia-tra.png"
                alt="Siłownia"
                layout="responsive"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-2"
            ]
          }
        >
          <Link href="/cennik/fitness">
            <a>Siłownia</a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-3"
            ]
          }
        >
          <Link href="/cennik/fitness">
            <a>
              <Image
                src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/sauna-tra.png"
                alt="Sauna i solarium"
                layout="responsive"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-3"
            ]
          }
        >
          <Link href="/cennik/fitness">
            <a>Sauna i solarium</a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--svg-icon-8"
            ]
          }
        >
          <Link href="/cennik/ortopedia">
            <a>
              <Image
                src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/co-tu-znajdziesz/ortopedzi-tra.png"
                alt="Ortopedia"
                layout="responsive"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </li>

        <li
          className={
            styles[
              "layout__strona-glowna__cala-strona__lista-co-tu-znajdziesz--item--tekst-8"
            ]
          }
        >
          <Link href="/cennik/ortopedia">
            <a>Ortopedia</a>
          </Link>
        </li>
      </ul>

      <CarouselPoziomy />

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
          Zobacz co tutaj na Ciebie czeka!
        </h2>
        <CarouselFotyINFINITI />

        <button
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-gallery--nazwa-miejsca"
            ]
          }
        >
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
                  reduxStatePoziomIMiejsceAktualne.miejsce,
              )
              .wyswietlanaNazwa.toUpperCase()}
          </h3>
        </button>
      </section>

      <GodzinyOtwarciaKS />
      <Partnerzy />
      {/* <CallButton /> */}
      <ModalPotwierdzajacyAkceptacjeCookies />
    </div>
  );
};
export default StronaGlowna;
