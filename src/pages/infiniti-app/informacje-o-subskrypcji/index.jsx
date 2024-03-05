//
// Table of content for this file is written at the bottom
//
// @use "../../../styles/sass/abstracts/variables";
import styles from "src/styles/sass/styles-all.module.scss";
import { PanelZOpisemSubskrycji } from "../../../features/e-trener";
import {
  infoOSubskrypcji,
  tekstySamozmieniajace,
} from "../../../features/e-trener";
import ReactTyped from "react-typed";
import { useUser } from "@auth0/nextjs-auth0/client";
import { WitaczImiennyZLinkami } from "../../../features/e-trener";
import dynamic from "next/dynamic";
const InfoOSubskrypcji = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {/* {isLoading && <div>Loading user...</div>} */}
      {/* hook1 - /\ dodaj loader legitny. o ile w ogole potrebny w sumie. */}

      <div className={styles["info-o-subskrypcji__container"]}>
        {user ? (
          <WitaczImiennyZLinkami user={user} isUstawieniaDostepne={false} />
        ) : (
          <div style={{ marginTop: "6rem" }}></div>
        )}
        {/* <header className={styles["info-o-subskrypcji__tytul"]}>
          <h1>
            <ReactTyped
              strings={tekstySamozmieniajace}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
          <h2>DZIELI CIĘ OD TWOJEGO E-TRENERA!</h2>
        </header> */}
        <ul className={styles["info-o-subskrypcji__lista-paneli"]}>
          {infoOSubskrypcji.map((panel, index) => {
            return (
              <PanelZOpisemSubskrycji
                key={panel.id}
                tekst={panel.tekst}
                fota={panel.fota}
                kierunekCiecia={
                  index % 2 === 0 ? "--lewo-ciety" : "--prawo-ciety"
                }
              />
            );
          })}
        </ul>
        <section className={styles["info-o-subskrypcji__btn-subskrybuj"]}>
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>

          <stripe-buy-button
            buy-button-id="buy_btn_1NhV8yKGht8obmlkIWMOxfDV"
            publishable-key="pk_test_51NUuTyKGht8obmlkV6fMysPOrScxtbyfWrTIW6oV7GHVib7ejuifc6X8PyIACcW75m5H0XNSlm4158YJ55Olla4k00WkwVCODD"
          ></stripe-buy-button>
          {/* /\ hook1 wstaw tu button z LIVE VERSION pozniej */}
        </section>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(InfoOSubskrypcji), {
  ssr: false,
});
//
//~~ _. Rozpiska (+ filmik, w przyszłości), z wyjaśnieniem jaką zawartość daje subskrypcja
//
//       _._. ...
//
