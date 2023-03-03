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

import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const OsobaKonkretna = (props) => {
  console.log(props.daneOOsobie.fotoPathKoncowka);

  const socialeTejOsoby = [];
  for (let socialKonkretny in props.daneOOsobie.socialMediaLinks) {
    // console.log("sociale", props.daneOOsobie.socialMediaLinks);
    switch (socialKonkretny) {
      case "facebook":
        socialeTejOsoby.push(
          <Link
            href={`${props.daneOOsobie.socialMediaLinks.facebook}`}
            key={socialKonkretny}
          >
            <a>
              <FaFacebookF size="2rem" color="#89150d" />
            </a>
          </Link>
        );
        break;
      case "instagram":
        socialeTejOsoby.push(
          <Link
            href={`${props.daneOOsobie.socialMediaLinks.instagram}`}
            key={socialKonkretny}
          >
            <a>
              <BsInstagram size="2rem" color="#89150d" />
            </a>
          </Link>
        );
        break;
      case "email":
        // console.log("email-ccc", props.daneOOsobie.socialMediaLinks.email),
        socialeTejOsoby.push(
          // <Link
          //   href={``}
          //   key={socialKonkretny}
          // >
          //   <a>
          //     {/* //hook2 i sizing of react-icons in rems */}
          //     <TfiEmail size="2rem" color="#088b9a" />
          //   </a>
          // </Link>

          <TfiEmail size="2rem" color="#89150d" />
        );
        socialeTejOsoby.push(<p>{props.daneOOsobie.socialMediaLinks.email}</p>);
        break;
      default:
        break;
    }
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
          "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container"
        ]
      }
    >
      <div
        className={
          styles[
            "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--fota"
          ]
        }
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/fitness/kadra/${props.daneOOsobie.fotoPathKoncowka}.png`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={100}
          layout="fill"
          objectFit="contain"
          quality={50}
          priority
          loading="eager"
        />
      </div>
      <div
        className={
          styles[
            "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--imie-i-nazwisko"
          ]
        }
      >
        {`${props.daneOOsobie.name} ${props.daneOOsobie.nazwisko}`}
      </div>
      <div
        className={
          styles[
            "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--rola-dokladna"
          ]
        }
      >
        {props.daneOOsobie.funkcja}
      </div>

      {/* //hook1 - opis keidys mozna dorobic, co lubi etc. cos perosnalnego */}
      {/* <div
        className={
          2 > 1 === true
            ? styles[
                "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--tresc-tekst"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        {props.daneOOsobie.opis}
      </div> */}

      <div
        className={
          2 > 1 === true
            ? styles[
                "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--sociale"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--sociale--svg-konkretny"
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
