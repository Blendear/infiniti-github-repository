//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { TytulZTlemKolorowym, TytulBezTla, PanelGrupyMiesniowej } from "..";
import grupyMiesniowe from "../data/grupyMiesniowe"; //hook1 - dlaczego tak dziala, a nie dziala, gdy importuje z "index.js", czyli po przez ".." ?- reszta plikow przeicez dziala takim importem
import Image from "next/image";

const SzczegolyCwiczenia = ({ cwiczenie }) => {
  return (
    <div className={styles[`container__css-class-name`]}>
      <TytulZTlemKolorowym>nazwa maszyny</TytulZTlemKolorowym>
      <TytulBezTla>MIĘŚNIE ĆWICZONE</TytulBezTla>
      <ul>
        {cwiczenie["cwiczone-miesnie"].map((miesien, i) => {
          return (
            <PanelGrupyMiesniowej
              key={i}
              grupaMiesniowa={miesien}
              fota={grupyMiesniowe.find(({ nazwa }) => nazwa === miesien).fota}
            />
          );
        })}
      </ul>
      <TytulBezTla>LOKALIZACJA MASZYNY</TytulBezTla>
      <div
        // className={styles["image-styling"]}   // \/ is a palceholder, before I write code of <
        style={{ position: "relative", height: "4rem", width: "4rem" }}
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/e-trener/lokalizacje/${cwiczenie["fota-lokalizacji"]}`}
          alt={`error while loading image`}
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          quality={100}
        />
      </div>
    </div>
  );
};
export default SzczegolyCwiczenia;

//~~ _. SzczegolyCwiczenia
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
