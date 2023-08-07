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
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1NZfo5KGht8obmlk8ckROD9N"
        publishable-key="pk_test_51NUuTyKGht8obmlkV6fMysPOrScxtbyfWrTIW6oV7GHVib7ejuifc6X8PyIACcW75m5H0XNSlm4158YJ55Olla4k00WkwVCODD"
      ></stripe-buy-button>
    </div>
  );
};
export default InfoOSubskrypcji;

//
//~~ _. Rozpiska i (później) filmik, z wyjaśnieniem jaką zawartość i korzyści daje subskrypcja
//
//       _._. ...
//
