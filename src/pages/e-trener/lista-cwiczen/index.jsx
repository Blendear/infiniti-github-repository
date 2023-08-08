//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import { useRouter } from "next/router";
import { MiniaturkaCwiczenia } from "../../../features/e-trener";
import { useState, useEffect } from "react";
import { TytulBezTla, TytulZTlemKolorowym } from "../../../features/e-trener";
import ModalCwiczeniaWybranego from "../../../features/e-trener/components/ModalCwiczeniaWybranego";
import { cwiczenia } from "../../../features/e-trener";

const ListaCwiczen = () => {
  const [nazwaModalu, setNazwaModalu] = useState("null"); // ["wideo" || "szczegoly"]
  const [filtr, setFiltr] = useState("null"); // ["maszyna" || "gr-miesniowa"]
  const [wartosc, setWartosc] = useState("null"); // [number idMaszyny || string "cwiczone-miesnie"]
  // const [idOtwartegoCwiczenia, setIdOtwartegoCwiczenia] = useState("null"); // [string z id cwiczenia]
  const [otwarteCwiczenie, setOtwarteCwiczenie] = useState({}); // object z propertiesami cwiczenia

  const router = useRouter();

  useEffect(() => {
    router.query !== null &&
      (setNazwaModalu(router.query["nazwa-modalu"]),
      setFiltr(router.query["filtr"]),
      setWartosc(router.query["wartosc"]));
  }, [router.query]);

  return (
    <div className={styles["container__css-class-name"]}>
      <TytulZTlemKolorowym>WYBIERZ ĆWICZENIE I ZACZYNAJMY!</TytulZTlemKolorowym>
      <TytulBezTla>
        LUB KLIKNIJ “i”, ABY ZOBACZYĆ LOKALIZACJĘ MASZYNY ORAZ “ĆWICZONE
        MIĘŚNIE”
      </TytulBezTla>
      <div>{`${filtr} ${wartosc}`}</div>
      {/* //       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń */}
      <div>
        {cwiczenia.map((cwiczenie, index) => {
          //       _._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia
          if (filtr === "maszyna" && wartosc === cwiczenie.idMaszynyUzywanej) {
            return (
              <MiniaturkaCwiczenia
                key={index}
                cwiczenie={cwiczenie}
                setNazwaModalu={setNazwaModalu}
                setOtwarteCwiczenie={setOtwarteCwiczenie}
              />
            );
          } else if (
            filtr === "gr-miesniowa" &&
            cwiczenie["cwiczone-miesnie"].find((miesien) => miesien === wartosc)
          ) {
            console.log("OTO ITEM Z LISTY CWICZEN: ", cwiczenie);
            return (
              <MiniaturkaCwiczenia
                key={index}
                cwiczenie={cwiczenie}
                setNazwaModalu={setNazwaModalu}
                setOtwarteCwiczenie={setOtwarteCwiczenie}
              />
            );
          }
        })}
      </div>
      {nazwaModalu !== "null" && (
        <ModalCwiczeniaWybranego
          setNazwaModalu={setNazwaModalu}
          nazwaModalu={nazwaModalu}
          otwarteCwiczenie={otwarteCwiczenie}
        />
      )}
    </div>
  );
};
export default ListaCwiczen;

//~~ _. ListaCwiczen
//
//       _._. <TytulZTlemKolorowym> & <TytulBezTla>
//
//       _._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia
//
//       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń
//
//            _._._. Filtr ćwiczeń - sprawdza czy wywoływaczem szukania była maszyna czy grupa miesniowa & czy wartosc id maszyny lub nazwa grupy miesniowej widnieje w properties danego cwiczenia
//
//       _._. <ModalCwiczeniaWybranego>
