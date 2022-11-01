// herehere28.10.2022

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

//hook1
const data = [
  {
    id: -1,
    levelName: "-1",

    fotaPath: "poziom-minus-1.png",
    classAssigned: "",
  },
  { id: 0, levelName: "0", fotaPath: "poziom-0.png", classAssigned: "" },
  { id: 1, levelName: "1", fotaPath: "poziom-1.png", classAssigned: "" },
  { id: 2, levelName: "2", fotaPath: "poziom-2.png", classAssigned: "" },
];

//hook1 - jak returnować, żeby wyskoczyło na stronie 4 pozycje?
const PoziomyInfiniti = () => {
  return (
    <div>
      {data.map((i) => {
        <Image
          className={styles[i.classAssigned]}
          src={`/images/strona-glowna-animowane-zdjecia/${i.fotoPath}`}
          alt={`nie pykło z poziomem ${i.id}`}
          width={800} //hook1 jaki ?
          height={400} //hook1 jaki ?
        ></Image>;
        <p> {`Poziom ${i.levelName}`}</p>;
      })}
    </div>
  );
};

export default PoziomyInfiniti;
