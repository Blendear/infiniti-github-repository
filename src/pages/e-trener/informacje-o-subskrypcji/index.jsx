//
// Table of content for this file is written at the bottom
//

import styles from "src/styles/sass/styles-all.module.scss";
import {
  PanelZOpisemSubskrycji,
  TytulSamozmieniajacySie,
} from "../../../features/e-trener";

const InfoOSubskrypcji = ({ propA, propB }) => {
  const daneDoPanelowZOpisami = [
    {
      id: 1,
      tekst:
        "ZESKANUJ KOD QR MASZYNY LUB ZAZNACZ MIĘŚNIE, Z KTÓRYCH CHCESZ WYDOBYĆ POTENCJAŁ",
      fota: "aaa.png",
    },
    {
      id: 2,
      tekst:
        "WYBIERZ ĆWICZENIE POD SIEBIE, SPOŚRÓD NAJEFEKTYWNIEJSZYCH PROPOZYCJI",
      fota: "bbb.png",
    },
    {
      id: 3,
      tekst:
        "DOWIEDZ SIĘ CO, GDZIE I JAK ROBIĆ, W SWOIM TEMPIE, BEZ PRESJI, BEZ POŚPIECHU",
      fota: "ccc.png",
    },
    {
      id: 4,
      tekst: "UŻYWAJĄC DEDYKOWANYCH MATERIAŁÓW WIDEO Z PROFESJONALNYM TRENEREM",
      fota: "ddd.png",
    },
  ];

  return (
    <div
      style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
      // className={styles["container__css-class-name"]}
    >
      <TytulSamozmieniajacySie
        arrayOfStrings={[
          "TYLKO JEDEN KROK",
          "CENA JEDNEJ PIZZY",
          "CENA PACZKI PAPIEROSÓW",
        ]}
      />
      <div>DZIELI CIĘ OD TWOJEGO E-TRENERA!</div>
      <div>
        {daneDoPanelowZOpisami.map((panel) => {
          return (
            <PanelZOpisemSubskrycji
              key={panel.id}
              tekst={panel.tekst}
              fota={panel.fota}
            />
          );
        })}
      </div>
      <div>{`Stripeowy przycisk "Subskrybuj"`}</div>
    </div>
  );
};
export default InfoOSubskrypcji;

//
//~~ _. Rozpiska i (później) filmik, z wyjaśnieniem jaką zawartość i korzyści daje subskrypcja
//
//       _._. ...
//
