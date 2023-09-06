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

import CircleLoader from "react-spinners/CircleLoader";

import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { wybranyPoziomIMiejsceActions } from "../../../../store/redux/store-redux";

const CarouselPoziomy = () => {
  const [aktualnyFotoPoziom, setAktualnyFotoPoziomu] = useState(0);
  const [aktywnyPoziom, setAktywnyPoziom] = useState(-1);
  const lengthOfDataArray = carouselData.length;

  const [loading, setLoading] = useState(true);

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
    console.log("index", reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej);
    dispatch(
      wybranyPoziomIMiejsceActions.ustawMiejsce({
        noweMiejsce: miejsceString,
      }),
      console.log(reduxStatePoziomIMiejsceAktualne)
    );
    //trap1 - redux dispatch - SETOWANIE WYAMGA PODANIA OF AN OBJECT WITH PROPERTY/IES NAME/S, N IE "0", TYLKO {PROPERTYNAME : 0}
    dispatch(wybranyPoziomIMiejsceActions.ustawIndexFoty({ nowyIndex: 0 }));
    console.log("index", reduxStatePoziomIMiejsceAktualne.indexFotyAktualnej);
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
      <h4
        className={
          styles[
            "layout__strona-glowna__cala-strona__carousel-poziomy--tekst-tytulowy"
          ]
        }
      >
        WYBIERZ <strong>PIĘTRO </strong> I <strong>MIEJSCE</strong> NA MAPIE,
        <br />
        ŻEBY ZOBACZYĆ WYŻEJ JEGO ZDJĘCIA
        {/* I OPIS */}
      </h4>

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
        >
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("szatnia-meska");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--szatnia-meska"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("kuznia-tytanow-1");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--kuznia-tytanow-1"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("kuznia-tytanow-2");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--kuznia-tytanow-2"
              ]
            }
          ></button>

          <button
            onClick={() => {
              handlerSetMiejsceAktywne("mma");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--mma"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("crossfit-box");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--crossfit-box"
              ]
            }
          ></button>

          <button
            onClick={() => {
              handlerSetMiejsceAktywne("sauna");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--sauna"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("szatnia-damska");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--minus-1--szatnia-damska"
              ]
            }
          ></button>
        </div>
        <div
          className={
            aktywnyPoziom === 0
              ? styles[
                  "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0"
                ]
              : styles["menu-modal__closed-variant"]
          }
        >
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("arkadia");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--arkadia"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("manager");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--manager"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("restauracja");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--restauracja"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("taras");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--taras"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("analiza-skladu-ciala");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--analiza-skladu-ciala"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("wodor");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--wodor"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("la-ola");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--la-ola"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("sfd");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--sfd"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("fizjoterapia-1");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--fizjoterapia-1"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("fizjoterapia-2");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--fizjoterapia-2"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("naturoterapia");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--naturoterapia"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("recepcja");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--recepcja"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("solarium");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--0--solarium"
              ]
            }
          ></button>
        </div>

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
            onClick={() => {
              handlerSetMiejsceAktywne("strefa-maszyn-2");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-maszyn-2"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("strefa-maszyn-3");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-maszyn-3"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("strefa-wolnych-ciezarow");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--strefa-wolnych-ciezarow"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("cialo-i-umysl");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--cialo-i-umysl"
              ]
            }
          ></button>
          {/* <button
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--chillera-utopia"
              ]
            }
          ></button> */}
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("maty");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--1--maty"
              ]
            }
          ></button>
        </div>
        <div
          className={
            aktywnyPoziom === 2
              ? styles[
                  "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--2"
                ]
              : styles["menu-modal__closed-variant"]
          }
        >
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("strefa-cardio");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--2--strefa-cardio"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("sala-ic");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--2--sala-ic"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("sala-zolta");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--2--sala-zolta"
              ]
            }
          ></button>
          <button
            onClick={() => {
              handlerSetMiejsceAktywne("masaz");
            }}
            className={
              styles[
                "layout__strona-glowna__cala-strona__carousel-poziomy--mapa--container--siatka-buttonow-container--2--masaz"
              ]
            }
          ></button>
        </div>
        {/* <div
          className={` ${styles["layout__strona-glowna__cala-strona__carousel-gallery--loader"]}`}
        >
          <CircleLoader
            color="#09adca"
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
        </div> */}
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
                  // onLoad={() => setLoading(true)}
                  // onLoadingComplete={() => setLoading(false)}
                  src={aktualnaFota.image}
                  alt={aktualnaFota.altText}
                  layout="fill"
                  objectFit="contain"
                  priority
                  loading="eager"
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
