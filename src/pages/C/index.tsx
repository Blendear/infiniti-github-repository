import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

// import fota1 from "public/images/strona-glowna-animowane-zdjecia/1.png";
// import fota2 from "public/images/strona-glowna-animowane-zdjecia/2.png";
// import fota3 from "public/images/strona-glowna-animowane-zdjecia/3.png";
// import fota4 from "public/images/strona-glowna-animowane-zdjecia/4.png";

// 1.  iteruj od 1 do 4, co sekunde

const StronaZAnimacjaRTG = () => {
  let arrayOfImageSources = [];

  const [timerNow, setTimerNow] = useState(1);

  let aktualnyIndexFoty = [
    //   { id: 1, nrFoty: fota1 },
    //   { id: 2, nrFoty: fota2 },
    //   { id: 3, nrFoty: fota3 },
    //   { id: 4, nrFoty: fota4 },
    // ];
    timerNow === 1 ? "1" : "",
    timerNow === 2 ? "2" : "",
    timerNow === 3 ? "3" : "",
    timerNow === 4 ? "4" : "",
  ].join("");

  let aktywujAkaDodajTaClasse = [
    timerNow === 1 ? "animation__slide-in" : "",
    timerNow === 2 ? "animation__slide-in2" : "",
    timerNow === 3 ? "animation__slide-in3" : "",
    timerNow === 4 ? "animation__slide-in4" : "",
  ].join("");

  // 1.  iteruj od 1 do 4, co sekunde

  useEffect(() => {
    setTimeout(() => {
      setTimerNow((prev) => (timerNow < 4 ? prev + 1 : 1));
    }, 1000);
  }, [timerNow]);

  return (
    <div>
      Fota nr {aktualnyIndexFoty}
      {styles[aktywujAkaDodajTaClasse]}
      <Image
        className={styles[aktywujAkaDodajTaClasse]}
        src={`/images/strona-glowna-animowane-zdjecia/${aktualnyIndexFoty}.png`}
        alt={`nie pykło z fota nr ${aktualnyIndexFoty}`}
        width={800}
        height={400}
      ></Image>
    </div>
  );
};
export default StronaZAnimacjaRTG;
