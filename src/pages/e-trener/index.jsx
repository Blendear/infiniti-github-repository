//
// Table of content for this file is written at the bottom
//
import { useRouter } from "next/router";
import styles from "src/styles/sass/styles-all.module.scss";
import {
  QRReader,
  NumberIDReader,
  MuscleChooser,
  WitaczImiennyZLinkami,
  WyborMetodySzukaniaMaszyny,
} from "../../features/e-trener";

const ETrenerStrGlowna = ({ propA, propB }) => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div
      style={{ height: "100dvh", backgroundColor: "white", color: "black" }}
      // className={styles["container__css-class-name"]}
    >
      <WitaczImiennyZLinkami />
      <WyborMetodySzukaniaMaszyny />
      {/* //       _._. 1 z 3 wariantów stron e-trenera (conditionally render'owane zależnie od parametru "method" parameter z query string'u) */}
      <div className={styles["child__css-class-name"]}>
        {
          {
            qr: <QRReader />,
            nr: <NumberIDReader />,
            miesien: <MuscleChooser />,
          }[router.query.method]
        }
      </div>
    </div>
  );
};
export default ETrenerStrGlowna;

//Witacz imienny użytkownika - z opcją wylogowania oraz przekierowania do panelu użytkownika (zarządzającym subskrypcją)
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
