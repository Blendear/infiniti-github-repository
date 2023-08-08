//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { TytulZTlemKolorowym, TytulBezTla, PanelGrupyMiesniowej } from "..";
import grupyMiesniowe from "../data/grupyMiesniowe"; //hook1 - dlaczego tak dziala, a nie dziala, gdy importuje z "index.js", czyli po przez ".." ?- reszta plikow przeicez dziala takim importem
import cwiczenia from "../data/cwiczenia";
const cw = {
  // hook2 - change the names to camelCase, to follow convention
  id: 1, // pod szybsze wyszukiwanie ćwiczeń, zamiast wolniejszego wysuzkiwania po stringu "nazwa"
  "link-wideo": "yt.com/11111111",
  "fota-miniaturki": "min-aaa.png",
  nazwa: "aaa",
  "cwiczone-miesnie": ["Barki - Środek", "Klatka piersiowa - Dół", "Biceps"],
  "fota-lokalizacji": "lok-aaa.png",
  idMaszynyUzywanej: "123456789",
};

const SzczegolyCwiczenia = ({ cwiczenie }) => {
  return (
    <div className={styles[`container__css-class-name`]}>
      <TytulZTlemKolorowym>nazwa maszyny</TytulZTlemKolorowym>
      <TytulBezTla>MIĘŚNIE ĆWICZONE</TytulBezTla>
      <ul>
        {cw["cwiczone-miesnie"].map((miesien, i) => {
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
