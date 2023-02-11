//
//~~ A.  Widok = 1 wybrana, aktualna fota
//   Nieubity
//
//       A.1. Wyświetlamy tylko fotę, która ma index równy numerowi aktualnej foty (numer settowany strzałkami)
//
//
//       A.2. Guard clause - if no data, nic nie wyświetlaj.
//
//
//~~ B.  Strzałki = zmiana index wybranego
//  Nieubity
//
//       B.1. Import ikonek
//
//
//       B.2. Using buttonów i ich onClick'i
//
//
//       B.3. Handler - OnClicki, treść
//       Nieubity
//
//           B.3.0. Settujemy numer (w tablicy) aktualnej foty - na ten od konkretnego kliknietego poziomu
//
//
//       B.4. Visual - ustawienie i wygląd
//       Nieubity
//
//           B.4.1. Pozycjonuję
//
//
//           B.4.2. Wygląd
//
//
//~~ C.  Data = zaciągane z componentu w "dedykowane", podawane tutaj i używane dynamicznie tutaj
//
//       C.0. Import danych i next image
//
//       C.1. Map - Dla każdego object w liście/object'cie danych, return Image (next.jsowy)
//
//           C.1.1. jask dokladnie wie ktory image zmienia??? - hook2
//           C.1.2. ???
//           C.1.3. ???
//~~ D.  Animacja = Snap scroll po strzałk'nięciu
//

import { useState } from "react";
import styles from "src/styles/sass/styles-all.module.scss";
//       C.0. Import danych i next image
import { carouselData } from "./CarouselData";
import Image from "next/image.js";
//       B.1. Import ikonek
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { wybranyPoziomIMiejsceActions } from "../../../../store/redux/store-redux";
//hook1 - zrob zeby nazwa miejsca w galerii i fota galerii byla adekwatna do miejsca w reduxsie
const CarouselPoziomy = () => {
  const [aktualnyFotoPoziom, setAktualnyFotoPoziomu] = useState(0);
  const [aktywnyPoziom, setAktywnyPoziom] = useState(2);
  const lengthOfDataArray = carouselData.length;

  //
  //       B.3. Handler - OnClicki, treść
  //
  //
  //           B.3.0. Settujemy numer (w tablicy) aktualnej foty - na ten od konkretnego kliknietego poziomu
  //
  const handlerSetPoziomFotoNumber = (poziomNumber) => {
    setAktualnyFotoPoziomu(poziomNumber + 1);
  };

  // poziom & miejsce \/

  // \/ zaciangiete dla sprawdzajacych coinsole logow głównie
  const reduxStatePoziomIMiejsceAktualne = useAppSelector(
    (state) => state.wybranyPoziomIMiejsceReducer
  );

  const dispatch = useAppDispatch();

  const handlerSetPoziomAktywny = (poziomNumber) => {
    setAktywnyPoziom(poziomNumber);
    // console.log(aktywnyPoziom);
    dispatch(
      wybranyPoziomIMiejsceActions.ustawPoziom({
        nowyPoziom: poziomNumber,
      }),
      console.log(reduxStatePoziomIMiejsceAktualne)
    );
  };
  const handlerSetMiejsceAktywne = (miejsceString) => {
    // setAktywneMiejsce("squash");
    // console.log(aktywneMiejsce);
    dispatch(
      wybranyPoziomIMiejsceActions.ustawMiejsce({
        noweMiejsce: miejsceString,
      }),
      console.log(reduxStatePoziomIMiejsceAktualne)
    );
  };
  //
  //       A.2. Guard clause - if no data, nic nie wyświetlaj.
  //
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }
  //
  return (
    <section
      className={styles["layout__strona-glowna__cala-strona__carousel-poziomy"]}
    >
      {/* 
      //       B.2. Using buttonów i ich onClick'i
      */}
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--tekst-tytulowy"
          ]
        }
      >
        WYBIERZ <strong>PIĘTRO </strong> & <strong>MIEJSCE</strong> NA MAPIE,
        ŻEBY ZOBACZYĆ WYŻEJ JEGO ZDJĘCIA I OPIS
      </div>

      <button
        className={`${
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--2"
          ]
        } ${
          aktywnyPoziom !== 2 &&
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--niewybrane"
          ]
        }`}
        onClick={() => {
          handlerSetPoziomAktywny(2), handlerSetPoziomFotoNumber(2);
        }}
      >
        2
      </button>
      <button
        className={`${
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--1"
          ]
        } ${
          aktywnyPoziom !== 1 &&
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--niewybrane"
          ]
        }`}
        onClick={() => {
          handlerSetPoziomAktywny(1), handlerSetPoziomFotoNumber(1);
        }}
      >
        1
      </button>
      <button
        className={`${
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--0"
          ]
        } ${
          aktywnyPoziom !== 0 &&
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--niewybrane"
          ]
        }`}
        // onMouseEnter={() => setBgColour("#c83f49")}
        onClick={() => {
          handlerSetPoziomAktywny(0), handlerSetPoziomFotoNumber(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          handlerSetPoziomAktywny(-1), handlerSetPoziomFotoNumber(-1);
        }}
        className={`${
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--minus-1"
          ]
        } ${
          aktywnyPoziom !== -1 &&
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--buttony--niewybrane"
          ]
        }`}
        // onClick={}
      >
        -1
      </button>

      {/*
      //       C.1. Map - Dla każdego object w liście/object'cie danych, return Image (next.jsowy)
      
      */}
      <div
        className={
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container"
          ]
        }
      >
        <div
          className={
            aktywnyPoziom === -1
              ? styles[
                  "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1"
                ]
              : styles["menu-modal__closed-variant"]
          }
        ></div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0"
            ]
          }
        ></div>
        <div
          className={
            aktywnyPoziom === 1
              ? styles[
                  "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1"
                ]
              : styles["menu-modal__closed-variant"]
          }
        >
          <button
            // onClick={handlerSetMiejsceAktywne}
            onClick={() => {
              handlerSetMiejsceAktywne("squash");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--squash"
              ]
            }
          ></button>
          <button
            // onClick={handlerSetMiejsceAktywne}
            onClick={() => {
              handlerSetMiejsceAktywne("boisko");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--boisko"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("strefa-maszyn-1");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-maszyn-1"
              ]
            }
          ></button>
          <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-maszyn-2"
              ]
            }
          ></button>
          <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-wolnych-ciezarow"
              ]
            }
          ></button>
          <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--cialo-i-umysl"
              ]
            }
          ></button>
          <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--chillera-utopia"
              ]
            }
          ></button>
          <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--maty"
              ]
            }
          ></button>
          <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-maszyn-3"
              ]
            }
          ></button>
        </div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--2"
            ]
          }
        ></div>
        <div
          className={
            styles[
              "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--mapa"
            ]
          }
        >
          {carouselData.map((aktualnaFota, indexAktualny) => (
            <div
              className={
                indexAktualny === aktualnyFotoPoziom ? styles[""] : styles[""]
              }
              // /\ dodaj animacje, dodajac styles "active" i styles "none"
              key={indexAktualny}
            >
              {/* 
            //       A.1. Wyświetlamy tylko fotę, która ma index równy numerowi aktualnej foty (numer settowany strzałkami)
            */}
              {indexAktualny === aktualnyFotoPoziom && (
                <Image
                  src={aktualnaFota.image}
                  alt={`nie pyklo zdjecie`}
                  // width={300}
                  // height={300}
                  layout="fill"
                  objectFit="contain"
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
