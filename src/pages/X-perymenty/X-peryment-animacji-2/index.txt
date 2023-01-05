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

const stringiZdjecDoStronyGlownej = [
  {
    id: 1,
    filepath: "LOGO_INFINITI_RGB.png",
  },
  { id: 2, filepath: "pig.png" },
];

const StronaA = () => {
  return (
    <div className={styles["ogolno-apkowy-styl"]}>
      <div className={styles["sliding-images"]}>
        {/* //
//  1. sss - tyle ile mam obrazków w arr[], tyle stworze <Image>'es
// */}
        {stringiZdjecDoStronyGlownej.map((aktualnaFota) => (
          <div className={styles["sliding-images"]} key={aktualnaFota.id}>
            <Image
              src={`/images/strona-glowna-animowane-zdjecia/${aktualnaFota.filepath}`}
              alt={`filepath : ${aktualnaFota.filepath}`}
              // width={638}
              // height={577}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default StronaA;
