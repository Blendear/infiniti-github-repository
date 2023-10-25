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
import { carouselData } from "./CarouselData";
import Image from "next/image.js";
//       B.1. Import ikonek
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";

// let cos = 1;
const CarouselPartnerzy = () => {
  const [aktualnyFotoIndex, setAktualnyFotoIndex] = useState(0);
  const ilePartnerowPojedynczych = carouselData.length;

  const ileSeriiPartnerow = [1, 2, 3, 4, 5];

  const [indexZdjeciaPierwszegoZTrzech, setIndexZdjeciaPierwszegoZTrzech] =
    useState(1);

  // const xileRazy = Math.ceil(ilePartnerowPojedynczych / 3);

  //
  //       B.3. Handler - OnClicki, treść
  //
  //
  //           B.3.0. Settujemy numer (w tablicy) aktualnej foty
  //
  //           B.3.1. Gdy aktualny jest ostanią fotą - przejdź do pierwszej || gdy nie jest ostatnią - przejdź do next foty

  //hook2 - metodologia - typ funkcji wpisz w nazwe na poczatku, np. "hadnler / intrval " etc.
  // herehere11.02.2023 \/
  useEffect(() => {
    const intervalZmienIndex = setInterval(() => {
      setIndexZdjeciaPierwszegoZTrzech((oldCount) => {
        if (oldCount + 1 > ilePartnerowPojedynczych) {
          return 1;
        } else {
          return oldCount + 3;
        }
      });
    }, 500);

    return () => {
      clearInterval(intervalZmienIndex);
    };
  }, []);

  //       A.2. Guard clause - if no data, nic nie wyświetlaj.
  //
  //hook2 -guard close exmaple pod wyswietlanie NICZEGO if data error
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <div
      className={`${styles["layout__strona-glowna__cala-strona__carousel-gallery--pozycja-fot"]}`}
    >
      {ileSeriiPartnerow.map((aktualnaFota, indexAktualny) => (
        <div
          className={
            indexAktualny === aktualnyFotoIndex
              ? `${styles["layout__strona-glowna__galeria__carousel-fot--slide-active"]} ${styles["carousel-foty-infiniti__slide-active"]}`
              : `${styles["layout__strona-glowna__galeria__carousel-fot--slide-none"]} ${styles["carousel-foty-infiniti__slide-none"]} `
          }
          key={indexAktualny}
        >
          {/* 
            //       A.1. Wyświetlamy tylko fotę, która ma index równy numerowi aktualnej foty (numer settowany strzałkami)
            */}
          {indexAktualny === aktualnyFotoIndex && (
            <div
              className={
                styles[
                  "layout__strona-glowna__cala-strona__partnerzy--carousel"
                ]
              }
            >
              <div
                className={
                  styles[
                    "layout__strona-glowna__cala-strona__partnerzy--carousel--fota-1"
                  ]
                }
              >
                <Image
                  src={`/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/${indexZdjeciaPierwszegoZTrzech}.png`}
                  alt={`Logo partnera klubu INFINITI`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div
                className={
                  styles[
                    "layout__strona-glowna__cala-strona__partnerzy--carousel--fota-2"
                  ]
                }
              >
                {indexZdjeciaPierwszegoZTrzech + 1 <=
                  ilePartnerowPojedynczych && (
                  <Image
                    src={`/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/${
                      indexZdjeciaPierwszegoZTrzech + 1
                    }.png`}
                    alt={`Logo partnera klubu INFINITI`}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
              <div
                className={
                  styles[
                    "layout__strona-glowna__cala-strona__partnerzy--carousel--fota-3"
                  ]
                }
              >
                {indexZdjeciaPierwszegoZTrzech + 2 <=
                  ilePartnerowPojedynczych && (
                  <Image
                    src={`/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/${
                      indexZdjeciaPierwszegoZTrzech + 2
                    }.png`}
                    alt={`Logo partnera klubu INFINITI`}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CarouselPartnerzy;
