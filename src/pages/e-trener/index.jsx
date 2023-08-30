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
import stripeGetUserInfo from "../../utils/stripeGetUserInfo"; //hook2 - przerob na export z index.js pliku uniwersalnego

const ETrenerStrGlowna = ({ propA, propB }) => {
  const { user, isLoading } = useUser();
  const [activeButton, setActiveButton] = useState("qr");
  const [pokazInfoNiezasubskrybowanemu, setPokazInfoNiezasubskrybowanemu] =
    useState(false);

  const router = useRouter();
  // console.log("router", router);

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      const subInfo = await stripeGetUserInfo(user.email);
      subInfo.data.doesASubWithThisIDExist
        ? setPokazInfoNiezasubskrybowanemu(true)
        : router.push("/e-trener/informacje-o-subskrypcji");
    };
    user && checkSubscriptionStatus();
  }, [user]);

  return (
    <div
      // style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
      className={styles["strona-glowna"]}
    >
      {pokazInfoNiezasubskrybowanemu && (
        <article
          // style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
          className={styles["strona-glowna__container"]}
        >
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
        </article>
      )}
    </div>
  );
};
export default ETrenerStrGlowna;

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
