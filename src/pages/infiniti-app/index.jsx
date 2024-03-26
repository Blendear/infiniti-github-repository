//
// Table of content for this file is written at the bottom
//
import { useRouter } from "next/router";
import styles from "src/styles/sass/styles-all.module.scss";
import {
  QRSzukacz,
  NumerIDSzukacz,
  WybieraczMiesni,
  WitaczImiennyZLinkami,
  WyborMetodySzukaniaMaszyny,
} from "../../features/e-trener";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ModalPotwierdzajacyAkceptacjeRegulaminow } from "../../features/e-trener";
import dynamic from "next/dynamic";

const ETrenerStrGlowna = ({ propA, propB }) => {
  const router = useRouter();

  const { user, isLoading } = useUser();
  const [activeButton, setActiveButton] = useState(router.query.method || "qr");
  // Hardcoded to true, since the basic service is free for every account
  const [pokazInfoNiezasubskrybowanemu, setPokazInfoNiezasubskrybowanemu] =
    useState(true);

  // Disabled, since the basic service is free for every account
  // useCheckSubscriptionStatus(setPokazInfoNiezasubskrybowanemu);

  useEffect(() => {
    if (router.query.method) {
      setActiveButton(router.query.method);
    }
  }, [router.query.method]);

  return (
    <div className={styles["strona-glowna"]}>
      {pokazInfoNiezasubskrybowanemu && (
        <article className={styles["strona-glowna__container"]}>
          <WitaczImiennyZLinkami user={user} isUstawieniaDostepne={true} />
          <WyborMetodySzukaniaMaszyny
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          {/* //       _._. 1 z 3 wariantów stron e-trenera (conditionally render'owane zależnie od parametru "method" parameter z query string'u) */}
          <section className={styles["strona-glowna__metoda-szukania"]}>
            {
              {
                qr: <QRSzukacz />,
                nr: <NumerIDSzukacz />,
                miesien: <WybieraczMiesni />,
              }[router.query.method]
            }
          </section>
          {2 > 1 && <ModalPotwierdzajacyAkceptacjeRegulaminow />}
        </article>
      )}
    </div>
  );
};
// export default ETrenerStrGlowna;
export default dynamic(() => Promise.resolve(ETrenerStrGlowna), {
  ssr: false,
});

//
//~~ _. E-Trener stronga główna
//
//       _._. <WitaczImiennyZLinkami>
//
//       _._. <WyborMetodySzukaniaMaszyny>
//
//       _._. 1 z 3 wariantów stron e-trenera (conditionally render'owane zależnie od parametru "method" parameter z query string'u)
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
