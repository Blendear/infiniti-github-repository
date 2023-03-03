import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";

const ZmienneStartoweTlo = (props) => {
  // props:
  // image-logo-path
  // image-tlo-path
  // style NIE, boi bedzie taki sam wszedzie?
  return (
    <div
      className={
        styles[
          "layout__strona-glowna__cala-strona__0-startowe-logo-i-fota--fota"
        ]
      }
    >
      <Image
        src={`/images/.dedykowane-do-strony-konkretnej/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/zmienne-startowe-logo-i-fota/${props.tloPath}`}
        alt={`nie pyklo zdjecie`}
        // height={200}
        // width={200}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};
export default ZmienneStartoweTlo;
