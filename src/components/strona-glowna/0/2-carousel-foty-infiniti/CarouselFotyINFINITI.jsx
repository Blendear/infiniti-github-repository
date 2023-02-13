//
//
//~~ A.  Widok = 1 wybrana, aktualna fota
//
//       A.1. Wyświetlamy tylko fotę, która ma index równy numerowi aktualnej foty (numer settowany strzałkami)
//
//       A.2. Guard clause - if no data, nic nie wyświetlaj.
//
//~~ B.  Strzałki = zmiana index wybranego
//
//       B.1. Import ikonek
//
//       B.2. Using ikonek i ich onClick'i
//
//       B.3. Handler - OnClicki, treść
//
//           B.3.0. Settujemy numer (w tablicy) aktualnej foty
//
//           B.3.1. Gdy aktualny jest ostanią fotą - przejdź do pierwszej || gdy nie jest ostatnią - przejdź do next foty
//
//           B.3.1. Gdy aktualny jest pierwszą fotą - przejdź do ostatniej || gdy nie jest ostatnią - przejdź do next foty
//
//       B.4. Visual - ustawienie i wygląd
//
//           B.4.1. Pozycjonowanie
//
//           B.4.2. Wygląd
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
import { carouselData } from "./Data";

import Image from "next/image.js";
//       B.1. Import ikonek
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";

//hook1 \/
//
// po poziomie data plik wybiera
//
// po nazwie fote znajduje

const CarouselPoziomy = () => {
  const reduxStatePoziomIMiejsceAktualne = useAppSelector(
    (state) => state.wybranyPoziomIMiejsceReducer
  );

  //ktore miejsc ejest aktywne

  // oblicz dlugosc jego zdjec array

  // max index zdjecia = poliz ile ma zdjec to miejsce /\ - 1

  // Image - if no foty w tym miejscu - wyswietl miejsce "boisko"

  //
  const [aktualnyFoto, setAktualnyFoto] = useState(0);
  const lengthOfDataArray = carouselData.length;

  // fotyTegoMiejsca
  //spinner

  //
  //       B.3. Handler - OnClicki, treść
  //
  //

  //           B.3.0. Settujemy numer (w tablicy) aktualnej foty
  //
  //           B.3.1. Gdy aktualny jest ostanią fotą - przejdź do pierwszej || gdy nie jest ostatnią - przejdź do next foty

  //herehere11.02.2023 - bug ze za duzo mozna dawac next image i wywala no image
  const handlerNextFoto = () => {
    // console.log(
    //   carouselData.find((miejsce) => miejsce.nazwaMiejsca === "boisko")
    // );
    console.log(aktualnyFoto);
    setAktualnyFoto(
      // !aktualnaFota.image ? 0 : aktualnyFoto + 1
      aktualnyFoto ===
        carouselData.find(
          (miejsce) =>
            miejsce.nazwaMiejsca === reduxStatePoziomIMiejsceAktualne.miejsce
        ).fotyTegoMiejsca.length -
          1
        ? 0
        : aktualnyFoto + 1
    );
  };

  //
  //           B.3.1. Gdy aktualny jest pierwszą fotą - przejdź do ostatniej || gdy nie jest ostatnią - przejdź do next foty
  //
  const handlerPrevFoto = () => {
    console.log(aktualnyFoto);
    let iloscFotWTymMiejscu = carouselData.find(
      (miejsce) =>
        miejsce.nazwaMiejsca === reduxStatePoziomIMiejsceAktualne.miejsce
    ).fotyTegoMiejsca.length;
    if (aktualnyFoto === 0) {
      setAktualnyFoto(iloscFotWTymMiejscu - 1);
    } else if (aktualnyFoto > iloscFotWTymMiejscu - 1) {
      setAktualnyFoto(0);
    } else {
      setAktualnyFoto(aktualnyFoto - 1);
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

      <FaArrowAltCircleLeft
        className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-left-arrow"]} ${styles["carousel-foty-infiniti__arrow-left"]}`}
        onClick={handlerPrevFoto}
        // style={{ boxShadow: "black" }}
      />
      <FaArrowAltCircleRight
        className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-right-arrow"]} ${styles["carousel-foty-infiniti__arrow-right"]} `}
        onClick={handlerNextFoto}
      />
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
                    aktualnyDataObject.fotyTegoMiejsca[aktualnyFoto]
                    // ? aktualnyDataObject.fotyTegoMiejsca[aktualnyFoto]
                    // : aktualnyDataObject.fotyTegoMiejsca[0]
                    // :
                  }
                  alt={`nie pyklo zdjecie`}
                  // width={300}
                  // height={300}
                  layout="fill"
                  objectFit="contain"
                  quality={20}
                />
              )}
            </div>
          ))}
        </div>

        {/* //herehere13.02.2023 - jak zrobic, zeby zapetlaly sie zdjecia,a nie "nie pyklo"? */}
      </div>
    </section>
  );
};
export default CarouselPoziomy;
