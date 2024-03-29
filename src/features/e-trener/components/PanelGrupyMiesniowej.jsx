//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import { LoaderIcon } from "../../../components/e-trener/LoaderIcon";
import { useState } from "react";

const PanelGrupyMiesniowej = ({ grupaMiesniowa, fota, key }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <li
      key={key}
      className={
        styles[
          "modal-cwiczenia-wybranego__miesnie-cwiczone__lista-miesni__miesien"
        ]
      }
    >
      {/* //       _._. AA */}
      <div
        className={
          styles[
            "modal-cwiczenia-wybranego__miesnie-cwiczone__lista-miesni__miesien__fota"
          ]
        }
      >
        {!isImageLoaded && <LoaderIcon fontSize="3rem" />}

        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/e-trener/ikony-miesni/${fota}`}
          alt={`error while loading image`}
          onLoadingComplete={() => {
            setIsImageLoaded(true);
          }}
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
          quality={5}
        />
      </div>

      <span
        className={
          styles[
            "modal-cwiczenia-wybranego__miesnie-cwiczone__lista-miesni__miesien__nazwa"
          ]
        }
      >
        <span> {`${grupaMiesniowa}`}</span>
      </span>
    </li>
  );
};
export default PanelGrupyMiesniowej;

//~~ _. PanelGrupyMiesniowej
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
