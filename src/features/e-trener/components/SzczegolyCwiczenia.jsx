//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { TytulZTlemKolorowym, TytulBezTla, PanelGrupyMiesniowej } from "..";

const SzczegolyCwiczenia = ({ cwiczenie }) => {
  const arr = ["Barki - Środek", "Klasssssstka piersiowa - Dół", "Biceps"];
  return (
    <div className={styles[`container__css-class-name`]}>
      <TytulZTlemKolorowym>nazwa maszyny</TytulZTlemKolorowym>
      <TytulBezTla>MIĘŚNIE ĆWICZONE</TytulBezTla>
      <ul>
        {console.log("cwiczenia tm: ", cwiczenie["cwiczone-miesnie"])}
        {console.log("arr: ", arr)}
        {/* hook1--herehere - DLACZEGO TO \/ N I E DZIAŁA NA "cwiczenie["cwiczone-miesnie"]", a działa na tych samych danych z placeholderowego "arr"? */}
        {arr.map((a, i) => {
          return <PanelGrupyMiesniowej key={i} grupaMiesniowa={a} />;
        })}
      </ul>
      <TytulBezTla>LOKALIZACJA MASZYNY</TytulBezTla>
      <div>{cwiczenie["fota-lokalizacji"]}</div>
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
