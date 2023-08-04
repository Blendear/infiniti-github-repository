//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";

const MiniaturkaCwiczenia = ({
  cwiczenie,

  setNazwaModalu,
  setIdOtwartegoCwiczenia,
}) => {
  return (
    <div className={styles["container__css-class-name"]}>
      <div className={styles[""]}>_________</div>
      {/* "i" - settuje "idCwiczenia" na id tej minitaruki & settuje "nazwaModalu" na "szczegoly" */}
      <button
        className={styles[""]}
        onClick={() => {
          setNazwaModalu("szczegoly"), setIdOtwartegoCwiczenia(cwiczenie["id"]);
        }}
      >
        (i)
      </button>
      {/* fota i nazwa - - I I - & settuje "nazwaModalu" na "wideo" */}

      <button>
        <div
          className={styles[""]}
          onClick={() => {
            setNazwaModalu("wideo"), setIdOtwartegoCwiczenia(cwiczenie["id"]);
          }}
        >{` [${cwiczenie["fota-miniaturki"]} ]`}</div>
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
