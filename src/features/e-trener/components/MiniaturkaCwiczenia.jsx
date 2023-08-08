//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const MiniaturkaCwiczenia = ({
  cwiczenie,
  setNazwaModalu,
  setOtwarteCwiczenie,
}) => {
  console.log("MiniaturkaCwiczenia dostala takie cwiczenie : ", cwiczenie);
  return (
    <div className={styles["container__css-class-name"]}>
      {/* "i" - settuje "idCwiczenia" na id tej minitaruki & settuje "nazwaModalu" na "szczegoly" */}
      <button
        className={styles[""]}
        onClick={() => {
          setNazwaModalu("szczegoly"), setOtwarteCwiczenie(cwiczenie);
        }}
      >
        (i)
      </button>
      {/* fota i nazwa - - I I - & settuje "nazwaModalu" na "wideo" */}

      <button
        className={styles[""]}
        onClick={() => {
          setNazwaModalu("wideo"), setOtwarteCwiczenie(cwiczenie);
        }}
      >
        <div
          // className={styles["image-styling"]}   // \/ is a palceholder, before I write code of <
          style={{ position: "relative", height: "4rem", width: "4rem" }}
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/miniaturki-cwiczen-wideo/${"mini1.png"}`}
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            quality={1}
          />
        </div>
        <div className={styles[""]}>{cwiczenie.nazwa}</div>
      </button>
    </div>
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
