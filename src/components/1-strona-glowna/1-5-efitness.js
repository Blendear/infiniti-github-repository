//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const EfitnessStronaGlowna = () => {
  return (
    <h1 className={styles["layout-strona-glowna__efitness-app"]}>
      {/* Efitness app */}

      {/* herehere01.11.2022 - hook1 - doróbcchild classy dla lewej i prawej strony. potrzebuje wiecej klatek grid-area dla prawej */}
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--opis"]
        }
      >
        <div>ZAPISUJ SIĘ NA ZAJĘCIA DZIĘKI APLIKACJI MOBILNEJ EFITNESS APP</div>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--app-store"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/appstore.png`}
          //
          alt={`nie pykło`}
          width={200}
          height={72}
        ></Image>
      </div>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--google"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/google.png`}
          alt={`nie pykło`}
          width={200}
          height={72}
        ></Image>
      </div>
      <div
        className={
          styles["layout-strona-glowna__efitness-app--prawa-fota--telefony"]
        }
      >
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/eFitness-system-aplikacja-mobilna-klub-fitness.png`}
          alt={`nie pykło`}
          width={1080}
          height={1204}
        ></Image>
      </div>
      <div className={styles["layout-strona-glowna__efitness-app-tlo"]}>
        <Image
          src={`/images/1-strona-glowna/1-5-efitness/tlo-pattern.png`}
          alt={`nie pykło`}
          width={1255}
          height={570}
        ></Image>
      </div>
    </h1>
  );
};
export default EfitnessStronaGlowna;
