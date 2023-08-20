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
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const ETrenerStrGlowna = ({ propA, propB }) => {
  const { user, isLoading } = useUser();
  const [activeButton, setActiveButton] = useState("qr");
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      {isLoading && <div>Loading user...</div>}
      {/* hook1 - /\ dodaj loader legitny. o ile w ogole potrebny w sumie. */}
      {user && (
        <div
          // style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
          className={styles["strona-glowna__container"]}
        >
          <WitaczImiennyZLinkami user={user} />
          <WyborMetodySzukaniaMaszyny
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          {/* //       _._. 1 z 3 wariantów stron e-trenera (conditionally render'owane zależnie od parametru "method" parameter z query string'u) */}
          <div className={styles["strona-glowna__metoda-szukania"]}>
            {
              {
                qr: <QRSzukacz />,
                nr: <NumerIDSzukacz />,
                miesien: <WybieraczMiesni />,
              }[router.query.method]
            }
          </div>
        </div>
      )}
    </>
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
