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
//       B.2. Using buttonów i ich onClick'i
//
//       B.3. Handler - OnClicki, treść
//
//           B.3.0. Settujemy numer (w tablicy) aktualnej foty - na ten od konkretnego kliknietego poziomu
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
import { carouselData } from "./CarouselData";
import Image from "next/image.js";
//       B.1. Import ikonek
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const CarouselPoziomy = () => {
  const [aktualnyFoto, setAktualnyFoto] = useState(0);
  const lengthOfDataArray = carouselData.length;

  //
  //       B.3. Handler - OnClicki, treść
  //
  //
  //           B.3.0. Settujemy numer (w tablicy) aktualnej foty - na ten od konkretnego kliknietego poziomu
  //
  const handlerSetFotoMinus1 = () => {
    setAktualnyFoto(0);
  };

  const handlerSetFoto0 = () => {
    setAktualnyFoto(1);
  };

  const handlerSetFoto1 = () => {
    setAktualnyFoto(2);
  };

  const handlerSetFoto2 = () => {
    setAktualnyFoto(3);
  };

  //
  //       A.2. Guard clause - if no data, nic nie wyświetlaj.
  //
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <section className={styles["carousel-poziomy"]}>
      {/* 
      //       B.2. Using buttonów i ich onClick'i
      */}
      <button
        className={styles["carousel-poziomy__poziom--2"]}
        onClick={handlerSetFoto2}
      >
        {" "}
        Poziom 2{" "}
      </button>
      <button
        className={styles["carousel-poziomy__poziom--1"]}
        onClick={handlerSetFoto1}
      >
        {" "}
        Poziom 1{" "}
      </button>
      <button
        className={styles["carousel-poziomy__poziom--0"]}
        onClick={handlerSetFoto0}
      >
        {" "}
        Poziom 0{" "}
      </button>
      <button
        className={styles["carousel-poziomy__poziom--minus1"]}
        onClick={handlerSetFotoMinus1}
      >
        {" "}
        Poziom -1{" "}
      </button>

      {/*
      //       C.1. Map - Dla każdego object w liście/object'cie danych, return Image (next.jsowy)
      
      */}
      <div className={styles["..."]}>
        {carouselData.map((aktualnaFota, indexAktualny) => (
          <div
            className={
              indexAktualny === aktualnyFoto
                ? styles["carousel-poziomy__slide-active"]
                : styles["carousel-poziomy__slide"]
            }
            key={indexAktualny}
          >
            {/* 
            //       A.1. Wyświetlamy tylko fotę, która ma index równy numerowi aktualnej foty (numer settowany strzałkami)
            */}
            {indexAktualny === aktualnyFoto && (
              <Image
                src={aktualnaFota.image}
                alt={`nie pyklo zdjecie`}
                width={300}
                height={300}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default CarouselPoziomy;
