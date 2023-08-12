//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import { useState } from "react";
import PotwierdzPrzycisk from "./PotwierdzPrzycisk";
import Image from "next/image";
import { grupyMiesniowe } from "..";
import grupyMiesnioweDublowaneNaModelu3D from "../data/grupyMiesnioweDublowaneNaModelu3D";

const WybieraczMiesni = () => {
  const [wybranyMiesien, setWybranyMiesien] = useState("");

  return (
    <>
      <TytulBezTla>KLIKNIJ W MIĘSIEŃ & ZATWIERDŹ</TytulBezTla>
      {console.log("grupyMiesniowe: ", grupyMiesniowe)}
      <div className={styles["strona-glowna__wybieracz-miesni"]}>
        <div
          className={
            styles["strona-glowna__wybieracz-miesni__3d-model-z-miesniami"]
          }
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/3d-model-grup-miesniowych/3d-model.png`}
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            // quality={50}
          />

          {/* visuale-wybranych-miesni */}

          {grupyMiesniowe.map((miesien, index) => (
            <div
              key={index}
              style={{
                opacity: `${wybranyMiesien === miesien.nazwa ? 0.5 : 0.1}`,
                transition: "opacity 0.35s",
              }}
            >
              <Image
                src={`/images/.dedykowane-do-strony-konkretnej/e-trener/3d-model-grup-miesniowych/${miesien.fota}`}
                alt={`error while loading image`}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
                quality={1}
              />
            </div>
          ))}
        </div>

        {/* niewidzialne buttony, odpalaajkce zmiane opacity danego png'ka miesnia */}
        <div
          className={
            styles["strona-glowna__wybieracz-miesni__siatka-do-przyciskow"]
          }
        >
          {grupyMiesniowe.map((miesien, index) => (
            <button
              key={index}
              className={
                styles[
                  `strona-glowna__wybieracz-miesni__siatka-do-przyciskow--${miesien.fota.slice(
                    0,
                    -4
                  )}`
                ]
              }
              onClick={() => {
                setWybranyMiesien(miesien.nazwa);
              }}
            ></button>
          ))}
          {/* zdublowanie przyciskow dla niektorych miesni, ponieważ nachodzenie pojedynczych na siebie daloby okropny, nietrafny UX klikajac w nie */}
          {grupyMiesnioweDublowaneNaModelu3D.map((miesien, index) => (
            <button
              key={index}
              className={
                styles[
                  `strona-glowna__wybieracz-miesni__siatka-do-przyciskow--${miesien.fota.slice(
                    0,
                    -4
                  )}`
                ]
              }
              onClick={() => {
                setWybranyMiesien(miesien.nazwa);
              }}
            ></button>
          ))}
        </div>
      </div>

      {wybranyMiesien && (
        <PotwierdzPrzycisk
          kolorTla="e-trener"
          filtr="gr-miesniowa"
          wartosc={wybranyMiesien}
        >
          {wybranyMiesien}
        </PotwierdzPrzycisk>
      )}
    </>
  );
};
export default WybieraczMiesni;

//~~ _. WybieraczMiesni
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
