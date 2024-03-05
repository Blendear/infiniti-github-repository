//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";

const PanelGrupyMiesniowej = ({ grupaMiesniowa, fota, key }) => {
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
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/e-trener/ikony-miesni/${fota}`}
          alt={`error while loading image`}
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
