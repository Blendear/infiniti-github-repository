//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { BsInfoLg } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";

const MiniaturkaCwiczenia = ({
  cwiczenie,
  setNazwaModalu,
  setOtwarteCwiczenie,
}) => {
  return (
    <li className={styles["lista-cwiczen__lista__cwiczenie"]}>
      {/* "i" - settuje "idCwiczenia" na id tej minitaruki & settuje "nazwaModalu" na "szczegoly" */}
      <button
        className={styles["lista-cwiczen__lista__cwiczenie__info"]}
        onClick={() => {
          setNazwaModalu("szczegoly"), setOtwarteCwiczenie(cwiczenie);
        }}
      >
        <BsInfoLg />
      </button>
      {/* fota i nazwa - - I I - & settuje "nazwaModalu" na "wideo" */}

      <button
        className={styles["lista-cwiczen__lista__cwiczenie__panel"]}
        onClick={() => {
          setNazwaModalu("wideo"), setOtwarteCwiczenie(cwiczenie);
        }}
      >
        <div
          className={
            styles["lista-cwiczen__lista__cwiczenie__panel__miniaturka"]
          }
        >
          <div
            className={
              styles[
                "lista-cwiczen__lista__cwiczenie__panel__miniaturka__dupni-sinek"
              ]
            }
          >
            {/* <BsFillPlayCircleFill /> */}
          </div>
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/miniaturki-cwiczen-wideo/${cwiczenie["fota-miniaturki"]}`}
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            quality={1}
          />
        </div>
        <span
          className={styles["lista-cwiczen__lista__cwiczenie__panel__tekst"]}
        >
          <div
            className={
              styles["lista-cwiczen__lista__cwiczenie__panel__tekst__napis"]
            }
          >
            {" "}
            {cwiczenie.nazwa}
          </div>
        </span>
      </button>
    </li>
  );
  // id={cwiczenie["id"]}
  // nazwa={cwiczenie.nazwa}
  // fota={cwiczenie["fota-miniaturki"]}
};
export default MiniaturkaCwiczenia;

//~~ _. MiniaturkaCwiczenia
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
