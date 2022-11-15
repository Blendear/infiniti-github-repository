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

//

// herehere11.11.2022 - jak zrobic:

// 1. dynamiczna liste

// 2. animowac ją

//

//

//

import styles from "src/styles/sass/styles-all.module.scss";

const GodzinyOtwarcia = () => {
  return (
    <h1 className={styles["layout-strona-glowna__godziny-otwarcia"]}>
      <div className={styles["layout-strona-glowna__godziny-otwarcia--sauna"]}>
        <div
          className={
            styles["layout-strona-glowna__godziny-otwarcia--sauna--tytul-napis"]
          }
        >
          SAUNA
        </div>
        <div
          className={
            styles["layout-strona-glowna__godziny-otwarcia--sauna--lista-plci"]
          }
        >
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--mezczyzni"
              ]
            }
          >
            <div> {"[ ]"}</div>
            <div> | mezczyzni</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--accordion"
              ]
              // ,
              // styles["closed"]
            }
          >
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--kobiety"
              ]
            }
          >
            <div> {"[ ]"}</div>
            <div> | kobiety</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--accordion"
              ]
              // ,
              // styles["closed"]
              ////hook1- /\ dlaczego zmienia KURWA ta druga clasa sposob displayu??
            }
          >
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--koedukacja"
              ]
            }
          >
            <div> {"[ ]"}</div>
            <div> | koedukacja</div>
          </div>
          <div
            className={
              styles[
                "layout-strona-glowna__godziny-otwarcia--sauna--lista-plci--accordion"
              ]
              // ,
              // styles["closed"]
              ////hook1- /\ dlaczego zmienia KURWA ta druga clasa sposob displayu??
            }
          >
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
        </div>
      </div>
      <div
        className={styles["layout-strona-glowna__godziny-otwarcia--klub"]}
      ></div>
    </h1>
  );
};
export default GodzinyOtwarcia;
