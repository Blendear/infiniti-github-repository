//// TEMPLATE \/\/\/

////  Problemy do rozwiązania poniższymi rozdziałami liczbowymi:
////
////  A.  Śledzę upływ czasu real life
////
////       A.a. ...
// //
// //           1.  Moments.js library
// //
// //               1.1. Zaciągnięcie czasu dla Polski
// //
// //               1.2. Przerobienie danych zaciągniętyhc na ładny visual timer'a

//// TEMPLATE /\/\/\

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { Transition } from "react-transition-group";

// import fota1 from "public/images/strona-glowna-animowane-zdjecia/1.png";
// import fota2 from "public/images/strona-glowna-animowane-zdjecia/2.png";
// import fota3 from "public/images/strona-glowna-animowane-zdjecia/3.png";
// import fota4 from "public/images/strona-glowna-animowane-zdjecia/4.png";

// 1.  iteruj od 1 do 4, co sekunde

const StronaZAnimacjaRTG = () => {
  let arrayOfImageSources = [];

  const [timerNow, setTimerNow] = useState(2);

  // let aktualnyIndexFoty = [
  //   timerNow === 1 ? "slide-1" : "",
  //   timerNow === 2 ? "slide-2" : "",
  //   timerNow === 3 ? "slide-3" : "",
  //   timerNow === 4 ? "slide-4" : "",
  // ].join("");

  let aktywujAkaDodajTaClasse = [
    timerNow === 1 ? "animation__slide-in" : "",
    timerNow === 2 ? "animation__slide-in2" : "",
    timerNow === 3 ? "animation__slide-in3" : "",
    timerNow === 4 ? "animation__slide-in4" : "",
  ].join("");

  // 1.  iteruj od 1 do 4, co sekunde

  useEffect(() => {
    setTimeout(() => {
      setTimerNow((prev) => (timerNow < 4 ? prev + 1 : 2));
    }, 6000);
  }, [timerNow]);

  return (
    <Transition in={true}>
      <h1
        className={
          styles["layout-strona-glowna__animowany-slide-in-fot-infiniti"]
        }
      >
        <div
          className={
            styles[
              "layout-strona-glowna__animowany-slide-in-fot-infiniti--miejsce-na-foty"
            ]
          }
        >
          {/* <div>
          Fota nr {timerNow}
          {styles[aktywujAkaDodajTaClasse]}
        </div> */}

          <Image
            // className={styles[aktywujAkaDodajTaClasse]}
            src={`/images/1-strona-glowna/1-1-slajdy-fot/slide-${
              timerNow - 1
            }.jpg`}
            alt={`nie pykło z fota nr ${timerNow - 1}`}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div
          className={
            styles[
              "layout-strona-glowna__animowany-slide-in-fot-infiniti--miejsce-na-foty"
            ]
          }
        >
          <Image
            className={styles[aktywujAkaDodajTaClasse]}
            src={`/images/1-strona-glowna/1-1-slajdy-fot/slide-${timerNow}.jpg`}
            alt={`nie pykło z fota nr ${timerNow}`}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </h1>
    </Transition>
  );
};
export default StronaZAnimacjaRTG;
