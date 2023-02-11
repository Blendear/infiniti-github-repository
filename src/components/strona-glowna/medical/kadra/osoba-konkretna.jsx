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

import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import Link from "next/link";
const OsobaKonkretna = (props) => {
  console.log(props.daneOOsobie.fotoPathKoncowka);

  const socialeTejOsoby = [];
  for (let index in props.daneOOsobie.socialMediaLinks) {
    // console.log("wartosc to : ", index);
    socialeTejOsoby.push(
      <Link href="/" key={index}>
        <a>{index}</a>
      </Link>
    );
  }
  // const x = props.daneOOsobie.socialMediaLinks.map(
  //   (dane, index) => (
  //     <Link href="/" key={index}>
  //       <a>{dane}</a>
  //     </Link>
  //   )
  // );

  //zwroc
  // svg
  //z linkiem adkewtnym
  return (
    <div
      className={
        styles[
          "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container"
        ]
      }
    >
      <div
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--fota"
          ]
        }
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/medical/kadra/fizjoterapeuci/${props.daneOOsobie.fotoPathKoncowka}.png`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={100}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--imie-i-nazwisko"
          ]
        }
      >
        {`${props.daneOOsobie.name} ${props.daneOOsobie.nazwisko}`}
      </div>
      <div
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--rola-dokladna"
          ]
        }
      >
        {props.daneOOsobie.funkcja}
      </div>

      <div
        className={
          2 > 1 === true
            ? styles[
                "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--tresc-tekst"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        {props.daneOOsobie.opis}
      </div>

      <div
        className={
          2 > 1 === true
            ? styles[
                "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--sociale"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        <div
          className={
            styles[
              "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--sociale--svg-konkretny"
            ]
          }
        >
          {socialeTejOsoby}
        </div>
      </div>
    </div>
  );
};
export default OsobaKonkretna;

// {
//   nazwisko: "Bizoń",
//   name: "Adam",
//   funkcja: "Trener MMA i BJJ",
//   fotoPathKoncowka: "bizon-adam",
//   socialMediaLinks: {
//     facebook: "https://www.facebook.com/profile.php?id=100057168981507",
//   },
// },
// {
//   nazwisko: "Deierling",
//   name: "Arek",
//   funkcja: "Instruktor fitness / Trener personalny",
//   fotoPathKoncowka: "deierling-arek",
//   socialMediaLinks: { instagram: "sdssd@gmail.com" },
// },
