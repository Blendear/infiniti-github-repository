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

//

//herehere11.11.2022 - animacje slajdów. CZAS ZACZĄĆ !!!!  \ ( > O<)/

// JAK - niech skonczony animacyjnie image 2 zostanie na pozycji image 1. I niech image 3 wejdzie na image 2, nmiehc sie naimuje

//

//

//

//

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import StronaZAnimacjaRTG from "../../pages/C";

const SlajdyFot = () => {
  return <StronaZAnimacjaRTG />;
  // <h1
  //   className={
  //     styles["layout-strona-glowna__animowany-slide-in-fot-infiniti"]
  //   }
  // >

  {
    /* <div
        className={
          styles[
            "layout-strona-glowna__animowany-slide-in-fot-infiniti--miejsce-na-foty"
          ]
        }
      > */
  }

  {
    /* <Image
        src={`/images/1-strona-glowna/1-1-slajdy-fot/slide-6.jpg`}
        alt={`nie pykło`}
        layout="fill"
        objectFit="cover"
      ></Image> */
  }
  {
    /* </div> */
  }
  // </h1>
};
export default SlajdyFot;
