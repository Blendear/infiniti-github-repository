/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

import { useState } from "react";
import styles from "src/styles/sass/styles-all.module.scss";
//       C.0. Import danych i next image
import { carouselData } from "./Data";

import Image from "next/image.js";
//       B.1. Import ikonek
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { wybranyPoziomIMiejsceActions } from "../../../../store/redux/store-redux";
import CircleLoader from "react-spinners/CircleLoader";

const carouselCss = {
  arrowsWrapper: css({
    gridColumn: "1/-1",
    gridRow: "1",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // trzy kolumny: lewa strzałka, środek, prawa strzałka
    alignItems: "center", // pionowe centrowanie
    justifyItems: "center", // poziome centrowanie
    height: "100%", // dopasowanie do wysokości carouselu
    position: "relative",
    zIndex: 5,
  }),

  leftArrow: css({
    position: "absolute",
    justifySelf: "start",
    cursor: "pointer",
    transition: "transform 0.3s ease, filter 0.3s ease",

    "&:hover": {
      transform: "scale(0.9)",
    },

    "@media (max-width: 600px)": {
      transform: "scale(0.75)",
      "&:hover": {
        transform: "scale(0.75)",
      },
    },
  }),

  rightArrow: css({
    justifySelf: "end",
    cursor: "pointer",
    transform: "scaleX(-1)",
    transition: "transform 0.3s ease, filter 0.3s ease",

    "&:hover": {
      transform: "scaleX(-1) scale(0.9)",
    },

    "@media (max-width: 600px)": {
      transform: "scaleX(-1) scale(0.75)",
      "&:hover": {
        transform: "scaleX(-1) scale(0.75)",
      },
    },
  }),
};

const CarouselPoziomy = () => {
  //spinner
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const reduxStatePoziomIMiejsceAktualne = useAppSelector(
    (state) => state.wybranyPoziomIMiejsceReducer,
  );
  const dispatch = useAppDispatch();

  const [aktualnyFoto, setAktualnyFoto] = useState(0);
  const lengthOfDataArray = carouselData.length;

  const aktualneMiejsceData = carouselData.find(
    (miejsce) =>
      miejsce.nazwaMiejsca === reduxStatePoziomIMiejsceAktualne.miejsce,
  );

  const iloscZdjec = aktualneMiejsceData?.fotyTegoMiejsca.length || 0;

  // fotyTegoMiejsca
  //spinner

  //
  //       B.3. Handler - OnClicki, treść
  //
  //

  //           B.3.0. Settujemy numer (w tablicy) aktualnej foty
  //
  //           B.3.1. Gdy aktualny jest ostanią fotą - przejdź do pierwszej || gdy nie jest ostatnią - przejdź do next foty

  const handlerNextFoto = () => {
    // console.log(
    //   carouselData.find((miejsce) => miejsce.nazwaMiejsca === "boisko")
    // );
    // console.log(
    //   "index foty aktualnej",
    //   reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej
    // );
    dispatch(
      wybranyPoziomIMiejsceActions.ustawIndexFoty({
        // !aktualnaFota.image ? 0 : aktualnyFoto + 1
        nowyIndex:
          reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej ===
          carouselData.find(
            (miejsce) =>
              miejsce.nazwaMiejsca === reduxStatePoziomIMiejsceAktualne.miejsce,
          ).fotyTegoMiejsca.length -
            1
            ? 0
            : reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej + 1,
      }),
    );
  };

  //
  //           B.3.1. Gdy aktualny jest pierwszą fotą - przejdź do ostatniej || gdy nie jest ostatnią - przejdź do next foty
  //
  const handlerPrevFoto = () => {
    // console.log(
    //   "index foty aktualnej",
    //   reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej
    // );
    // console.log(aktualnyFoto);
    let iloscFotWTymMiejscu = carouselData.find(
      (miejsce) =>
        miejsce.nazwaMiejsca === reduxStatePoziomIMiejsceAktualne.miejsce,
    ).fotyTegoMiejsca.length;
    if (reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej === 0) {
      dispatch(
        wybranyPoziomIMiejsceActions.ustawIndexFoty({
          nowyIndex: iloscFotWTymMiejscu - 1,
        }),
      );

      // setAktualnyFoto(iloscFotWTymMiejscu - 1);
    } else if (
      reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej >
      iloscFotWTymMiejscu - 1
    ) {
      dispatch(
        wybranyPoziomIMiejsceActions.ustawIndexFoty({
          nowyIndex: 0,
        }),
      );
      // setAktualnyFoto(0);
    } else {
      dispatch(
        wybranyPoziomIMiejsceActions.ustawIndexFoty({
          nowyIndex: reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej - 1,
        }),
      );
      // setAktualnyFoto(reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej - 1);
    }
  };
  //
  //       A.2. Guard clause - if no data, nic nie wyświetlaj.
  //
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <section
      className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-carousel"]} ${styles["carousel-foty-infiniti"]}`}
    >
      {/* 
      //       B.2. Using ikonek i ich onClick'i
      */}
      <div
        className={` ${styles["layout__strona-glowna__cala-strona__carousel-gallery--loader"]}`}
      >
        <CircleLoader
          color="#5c1593"
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
          }}
          size={"10vw"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      {/* <FaArrowAltCircleLeft
        className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-left-arrow"]} ${styles["carousel-foty-infiniti__arrow-left"]}`}
        onClick={handlerPrevFoto}
        // style={{ boxShadow: "black" }}
      /> */}
      {/* <FaArrowAltCircleRight
        className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-right-arrow"]} ${styles["carousel-foty-infiniti__arrow-right"]} `}
        onClick={handlerNextFoto}
      /> */}
      {iloscZdjec > 1 && (
        <div css={carouselCss.arrowsWrapper}>
          <Image
            src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/galeria-zdjec/arrow.png" // ścieżka do strzałki w prawo
            alt="Poprzednia fotka"
            width={45}
            height={45}
            css={carouselCss.leftArrow}
            onClick={handlerPrevFoto}
          />
          <div></div>

          <Image
            src="/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/galeria-zdjec/arrow.png" // ścieżka do strzałki w prawo
            alt="Następna fotka"
            width={45}
            height={45}
            css={carouselCss.rightArrow}
            onClick={handlerNextFoto}
          />
        </div>
      )}

      {/*
      //       C.1. Map - Dla każdego object w liście/object'cie danych, return Image (next.jsowy)
      
      */}
      <div
        className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-fot"]}`}
      >
        <div>
          {carouselData.map((aktualnyDataObject, indexAktualny) => (
            <div
              className={
                reduxStatePoziomIMiejsceAktualne.miejsce ===
                aktualnyDataObject.nazwaMiejsca
                  ? `${styles["layout__strona-glowna__galeria__carousel-fot--slide-active"]} ${styles["carousel-foty-infiniti__slide-active"]}`
                  : `${styles["layout__strona-glowna__galeria__carousel-fot--slide-none"]} ${styles["carousel-foty-infiniti__slide-none"]} `
              }
              key={indexAktualny}
            >
              {/* 
            //       A.1. Wyświetlamy tylko fotę, która ma index równy numerowi aktualnej foty (numer settowany strzałkami)
            */}
              {reduxStatePoziomIMiejsceAktualne.miejsce ===
                aktualnyDataObject.nazwaMiejsca && (
                <Image
                  // if no "akytualnyfoto" o tym numerze - wyseitl [0]
                  // if no [0] - ustaw fote specjalne "juz wkrotce dodamy zdjeciua tego miejsca!"
                  //herehere - dziala. DZIALA \/
                  src={
                    // 0 > 1
                    aktualnyDataObject.fotyTegoMiejsca[
                      reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej
                    ]

                    // ? aktualnyDataObject.fotyTegoMiejsca[aktualnyFoto]
                    // : aktualnyDataObject.fotyTegoMiejsca[0]
                    // :
                  }
                  // css={{ overflow: "hidden", borderRadius: "50px" }}
                  alt={aktualnyDataObject.altText}
                  layout="fill"
                  objectFit="contain"
                  quality={40}
                  // priority
                  // loading="eager"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CarouselPoziomy;
