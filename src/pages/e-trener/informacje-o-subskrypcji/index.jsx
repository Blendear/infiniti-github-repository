//
// Table of content for this file is written at the bottom
//

import styles from "src/styles/sass/styles-all.module.scss";
import {
  PanelZOpisemSubskrycji,
  TytulSamozmieniajacySie,
} from "../../../features/e-trener";
import {
  infoOSubskrypcji,
  tekstySamozmieniajace,
} from "../../../features/e-trener";

const InfoOSubskrypcji = ({ propA, propB }) => {
  return (
    <div
      style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
      // className={styles["container__css-class-name"]}
    >
      <TytulSamozmieniajacySie napisy={tekstySamozmieniajace} />
      <div>DZIELI CIĘ OD TWOJEGO E-TRENERA!</div>
      <div>
        {infoOSubskrypcji.map((panel) => {
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
