/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "src/styles/sass/styles-all.module.scss";
import Image from "next/image";
import Link from "next/link";

import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import CircleLoader from "react-spinners/CircleLoader";

const OsobaKonkretna = (props) => {
  // console.log(props.daneOOsobie.fotoPathKoncowka);

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
              <FaFacebookF size="2rem" color="#22c1c3" />
            </a>
          </Link>,
        );
        break;
      case "instagram":
        socialeTejOsoby.push(
          <Link
            href={`${props.daneOOsobie.socialMediaLinks.instagram}`}
            key={socialKonkretny}
          >
            <a>
              <BsInstagram size="2rem" color="#22c1c3" />
            </a>
          </Link>,
        );
        break;
      case "email":
        // console.log("email-ccc", props.daneOOsobie.socialMediaLinks.email),
        socialeTejOsoby
          .push
          // <Link
          //   href={``}
          //   key={socialKonkretny}
          // >
          //   <a>
          //     {/* //hook2 i sizing of react-icons in rems */}
          //     <TfiEmail size="2rem" color="#088b9a" />
          //   </a>
          // </Link>

          // <TfiEmail size="2rem" color="#22c1c3" />,
          ();
        socialeTejOsoby.push(
          <Link
            style={{ all: "text" }}
            href={`mailto:${props.daneOOsobie.socialMediaLinks.email}`}
          >
            <a>{props.daneOOsobie.socialMediaLinks.email}</a>
          </Link>,
        );
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
    <li
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
        <div css={loader}>
          <CircleLoader
            color="#5c1593"
            loading={true}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
            }}
            size={"6vw"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/medical/kadra/${props.daneOOsobie.fotoPathKoncowka}.png`}
          alt={`Zdjęcie pracownika - ${props.daneOOsobie.name} ${props.daneOOsobie.nazwisko}`}
          layout="fill"
          objectFit="contain"
          quality={50}
          priority
          loading="eager"
        />
      </div>
      <h3
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--imie-i-nazwisko"
          ]
        }
      >
        {`${props.daneOOsobie.name} ${props.daneOOsobie.nazwisko}`}
      </h3>
      <h4
        className={
          styles[
            "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--rola-dokladna"
          ]
        }
      >
        {props.daneOOsobie.funkcja}
      </h4>

      <div
        className={
          2 > 1 === true
            ? styles[
                "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--tresc-tekst"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        {/* {props.daneOOsobie.opis} */}
      </div>

      <ul
        className={
          2 > 1 === true
            ? styles[
                "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--sociale"
              ]
            : styles["menu-modal__closed-variant"]
        }
      >
        <li
          className={
            styles[
              "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--sociale--svg-konkretny"
            ]
          }
        >
          {socialeTejOsoby}
        </li>
      </ul>
      {props.text && props.text.trim() !== "" && (
        <p
          className={
            styles[
              "layout__medical-kadra__cala-strona__lista-rol__konkretna-rola-container__lista-osob-o-tej-roli-container__konkretna-osoba-container--tresc-tekst"
            ]
          }
        >
          {props.text}
        </p>
      )}
    </li>
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
const loader = css({
  zIndex: 0,
  position: "absolute",
  // top: "40%",
  justifySelf: "center",

  "@media (orientation: landscape)": {
    padding: 0,
    justifySelf: "center",
    // top: "30%",
    fontSize: "2rem",
  },

  "& span": {
    justifySelf: "center",
  },
});
