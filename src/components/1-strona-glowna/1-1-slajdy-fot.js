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

const SlajdyFot = () => {
  return (
    <h1
      className={
        styles["layout-strona-glowna__animowany-slide-in-fot-infiniti"]
      }
    >
      Slajdy fot
    </h1>
  );
};
export default SlajdyFot;
