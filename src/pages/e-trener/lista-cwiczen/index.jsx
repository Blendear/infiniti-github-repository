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

const ListaCwiczen = ({ propA, propB }) => {
  const [nazwaModalu, setNazwaModalu] = useState("null");
  const [idOtwartegoCwiczenia, setIdOtwartegoCwiczenia] = useState("null");
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    router.query !== null && setNazwaModalu(router.query["nazwa-modalu"]);
  }, [router.query]);

  return (
    <div className={styles["container__css-class-name"]}>
      <TytulZTlemKolorowym>WYBIERZ ĆWICZENIE I ZACZYNAJMY!</TytulZTlemKolorowym>
      <TytulBezTla>
        LUB KLIKNIJ “i”, ABY ZOBACZYĆ LOKALIZACJĘ MASZYNY ORAZ “ĆWICZONE
        MIĘŚNIE”
      </TytulBezTla>

      {/* //       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń */}
      <div>
        {cwiczenia.map((cwiczenie) => {
          return (
            <MiniaturkaCwiczenia
              key={cwiczenie["id-cwiczenia"]}
              id={cwiczenie["id"]}
              nazwa={cwiczenie.nazwa}
              fota={cwiczenie["fota-miniaturki"]}
              setNazwaModalu={setNazwaModalu}
              setIdOtwartegoCwiczenia={setIdOtwartegoCwiczenia}
            />
          );
        })}
      </div>
      {nazwaModalu !== "null" && (
        <ModalCwiczeniaWybranego
          nazwaModalu={nazwaModalu}
          idOtwartegoCwiczenia={idOtwartegoCwiczenia}
        />
      )}
    </div>
  );
};
export default ListaCwiczen;

//~~ _. ListaCwiczen
//
//       _._. MiniaturkaCwiczenia dla każdego z przefiltrowanych ćwiczeń
//
