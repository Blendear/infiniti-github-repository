import { useState, useEffect } from "react";
import styles from "src/styles/sass/styles-all.module.scss";
import { carouselData } from "./CarouselData";
import Image from "next/image.js";

const CarouselPartnerzy = () => {
  const [aktualnyZestaw, setAktualnyZestaw] = useState(0);

  const ilePartnerowPojedynczych = carouselData.length;
  const ileSeriiPartnerow = Math.ceil(ilePartnerowPojedynczych / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setAktualnyZestaw((prev) => (prev + 1) % ileSeriiPartnerow);
    }, 2000);

    return () => clearInterval(interval);
  }, [ileSeriiPartnerow]);
  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <div
      className={
        styles[
          "layout__strona-glowna__cala-strona__carousel-gallery--pozycja-fot"
        ]
      }
    >
      {[...Array(ileSeriiPartnerow)].map((_, indexAktualny) => (
        <div
          className={
            indexAktualny === aktualnyZestaw
              ? `${styles["layout__strona-glowna__galeria__carousel-fot--slide-active"]} ${styles["carousel-foty-infiniti__slide-active"]}`
              : `${styles["layout__strona-glowna__galeria__carousel-fot--slide-none"]} ${styles["carousel-foty-infiniti__slide-none"]}`
          }
          key={indexAktualny}
        >
          {indexAktualny === aktualnyZestaw && (
            <div
              className={
                styles[
                  "layout__strona-glowna__cala-strona__partnerzy--carousel"
                ]
              }
            >
              {[0, 1, 2].map((offset) => {
                const index = aktualnyZestaw * 3 + offset;
                return index < ilePartnerowPojedynczych ? (
                  <div
                    key={index}
                    className={
                      styles[
                        `layout__strona-glowna__cala-strona__partnerzy--carousel--fota-${
                          offset + 1
                        }`
                      ]
                    }
                  >
                    <Image
                      src={`/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/${
                        index + 1
                      }.png`}
                      alt={`Logo partnera klubu INFINITI`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CarouselPartnerzy;
