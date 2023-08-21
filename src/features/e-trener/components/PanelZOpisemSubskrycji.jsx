//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const PanelZOpisemSubskrycji = ({ tekst, fota, kierunekCiecia }) => {
  return (
    <div className={styles["info-o-subskrypcji__lista-paneli__panel"]}>
      {kierunekCiecia === "--prawo-ciety" && (
        <div
          className={styles["info-o-subskrypcji__lista-paneli__panel__fota"]}
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/info-o-subskrypcji/${fota}`}
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            quality={100}
          />
        </div>
      )}
      <div
        className={
          styles[
            `info-o-subskrypcji__lista-paneli__panel__opis${kierunekCiecia}`
          ]
        }
      >
        {tekst}
      </div>
      {kierunekCiecia === "--lewo-ciety" && (
        <div
          className={styles["info-o-subskrypcji__lista-paneli__panel__fota"]}
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/e-trener/info-o-subskrypcji/${fota}`}
            alt={`error while loading image`}
            layout="fill"
            objectFit="cover"
            priority
            loading="eager"
            quality={100}
          />
        </div>
      )}
    </div>
  );
};
export default PanelZOpisemSubskrycji;

//~~ _. FragmentOpisuSubskrycji
//
