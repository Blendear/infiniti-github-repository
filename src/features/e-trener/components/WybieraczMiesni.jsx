//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import TytulBezTla from "./TytulBezTla";
import { useState } from "react";
import PotwierdzPrzycisk from "./PotwierdzPrzycisk";
import Image from "next/image";
import { grupyMiesniowe } from "..";

const WybieraczMiesni = () => {
  const [wybranyMiesien, setWybranyMiesien] = useState("");

  return (
    <div className={styles["container__css-class-name"]}>
      <TytulBezTla>KLIKNIJ W MIĘSIEŃ & ZATWIERDŹ</TytulBezTla>
      {console.log("grupyMiesniowe: ", grupyMiesniowe)}
      <div
        // className={styles["3d-model-CONTAINER"]}   // \/ is a palceholder, before I write code of <
        style={{ position: "relative", height: "45rem", aspectRatio: "1/1.5" }}
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
          <Image
            key={index}
            // public//triceps.png
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/3d-model-grup-miesniowych/${miesien.fota}`}
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            // quality={50}
          />
        ))}
      </div>

      {/* niewidzialne buttony, odpalaajkce zmiane opacity danego png'ka miesnia */}
      <div className={styles["grid-do-btnów"]}>
        {grupyMiesniowe.map((miesien, index) => (
          <button
            key={index}
            className={styles[`btn--${miesien.fota}`]}
            onClick={() => {
              setWybranyMiesien(miesien.nazwa);
            }}
          >
            {`btn--${miesien.fota}`}
          </button>
        ))}
      </div>

      {wybranyMiesien && (
        <PotwierdzPrzycisk bgColor="green">{wybranyMiesien}</PotwierdzPrzycisk>
      )}
    </div>
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
