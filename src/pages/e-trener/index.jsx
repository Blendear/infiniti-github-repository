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

const ETrenerStrGlowna = ({ propA, propB }) => {
  const [activeButton, setActiveButton] = useState("qr");
  const router = useRouter();
  console.log(router.query);

  return (
    <div
      style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
      // className={styles["container__css-class-name"]}
    >
      <WitaczImiennyZLinkami />
      <WyborMetodySzukaniaMaszyny
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {/* //       _._. 1 z 3 wariantów stron e-trenera (conditionally render'owane zależnie od parametru "method" parameter z query string'u) */}
      <div className={styles["child__css-class-name"]}>
        {
          {
            qr: <QRSzukacz />,
            nr: <NumerIDSzukacz />,
            miesien: <WybieraczMiesni />,
          }[router.query.method]
        }
      </div>
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
