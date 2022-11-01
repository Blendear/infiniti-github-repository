// herehere28.10.2022

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

//hook1
const data = [
  {
    id: -1,
    levelName: "-1",

    fotaPath: "poziom-minus-1.png",
    classAssigned:
      "layout-strona-glowna__poziomy-infiniti-levle--minus-1--fota",
  },
  {
    id: 0,
    levelName: "0",
    fotaPath: "poziom-0.png",
    classAssigned: "layout-strona-glowna__poziomy-infiniti-levle--0--fota",
  },
  {
    id: 1,
    levelName: "1",
    fotaPath: "poziom-1.png",
    classAssigned: "layout-strona-glowna__poziomy-infiniti-levle--1--fota",
  },
  {
    id: 2,
    levelName: "2",
    fotaPath: "poziom-2.png",
    classAssigned: "layout-strona-glowna__poziomy-infiniti-levle--2--fota",
  },
];

const MapujemyPoArrayuFotIOpisow = data.map((i) => (
  <div key={i.id} className={styles[i.classAssigned]}>
    {console.log(styles[i.classAssigned])}
    <Image
      src={`/images/strona-glowna-animowane-zdjecia/1.png`}
      //
      alt={`nie pykło z poziomem ${i.id}`}
      width={800} //hook1 jaki ?
      height={400} //hook1 jaki ?
    ></Image>
  </div>
));

const PoziomyInfiniti = () => {
  return (
    <div className={styles["layout-strona-glowna__poziomy-infiniti-levle"]}>
      {MapujemyPoArrayuFotIOpisow}
    </div>
  );
};

export default PoziomyInfiniti;
