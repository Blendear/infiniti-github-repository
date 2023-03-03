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

/* global google */
import styles from "src/styles/sass/styles-all.module.scss";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//
import { GrDeploy, GrMailOption } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { BiPhone, BiTimeFive, BiRocket } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const StronaKontakt = () => {
  const [isCheckedZgoda, setIsCheckedZgoda] = useState(false);

  const handlerToggleZgodaCheckbox = () => {
    // console.log(isCheckedZgoda);

    setIsCheckedZgoda(!isCheckedZgoda);
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/sendgrid-send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  const dispatch = useAppDispatch();

  const handlerToggleMenuIsOpen = (event) => {
    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: false,
      })
    );
  };
  useEffect(() => {
    handlerToggleMenuIsOpen();
  }, []);

  return (
    //hook1 opisz wszystkie pliki INFINITI na rozdzialy. dla tobiegto za rok
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["layout__infiniti-kontakt__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-INFINITI.png" />
      <ZmienneStartoweLogo logoPath="logo-INFINITI.jpg" />
      <div
        className={
          styles["layout__infiniti-kontakt__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="KONTAKT" />
      </div>
      {/* <div
        className={
          styles["layout__infiniti-kontakt__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="DOJAZD" />
      </div> */}
      <div
        className={styles["layout__infiniti-kontakt__cala-strona--fota-w-tle"]}
      >
        <Image
          src={`/images/.dedykowane-do-strony-konkretnej/infiniti/kontakt/tlo.jpg`}
          alt={`nie pyklo zdjecie`}
          // height={200}
          // width={100}
          layout="fill"
          objectFit="cover"
          priority
          loading="eager"
        />
      </div>
      <form
        onSubmit={isCheckedZgoda === true ? handleOnSubmit : null}
        className={
          styles[
            "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container"
          ]
        }
      >
        <div
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--tytul-formularza"
            ]
          }
        >
          NAPISZ DO NAS
        </div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Twoje imię i nazwisko..."
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--input--imie-i-nazwisko"
            ]
          }
        />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Twój e-mail..."
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--input--email"
            ]
          }
        />
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Treść twojego pytania..."
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--input--tresc-wiadomosci"
            ]
          }
        />
        <div
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--checkbox"
            ]
          }
        >
          <input
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--checkbox--btn"
              ]
            }
            onChange={handlerToggleZgodaCheckbox}
            type="checkbox"
          ></input>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--checkbox--tresc-z-boku"
              ]
            }
          >
            * Wyrażam zgodę na przetwarzanie moich danych osobowych w związku z
            realizacją mojej prośby lub zapytania. Rozumiem, że zgoda może
            zostać cofnięta w każdym czasie, a jej cofnięcie skutkuje brakiem
            odpowiedzi i nie wpływa na legalność kontaktu przed jej wycofaniem.
          </div>
        </div>

        <button
          type="submit"
          className={
            isCheckedZgoda === true
              ? `${styles["layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--wyślij-btn"]} ${styles["layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--wyślij-btn--active"]}`
              : `${styles["layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--wyślij-btn"]} ${styles["layout__infiniti-kontakt__cala-strona__napisz-do-nas-container--wyślij-btn--blocked"]}`
          }
        >
          WYŚLIJ ZAPYTANIE
        </button>
      </form>

      <div
        className={
          styles[
            "layout__infiniti-kontakt__cala-strona__mapa-dojazdu--tytul-nad-nia"
          ]
        }
      >
        JESTEŚMY TUTAJ
      </div>
      <Link href="https://www.google.com/maps/place/INFINITI+Fitness+Club/@50.3508843,18.2200421,13z/data=!4m6!3m5!1s0x471111114b0862d9:0x44dc6b5ec4767732!8m2!3d50.3516512!4d18.2348049!16s%2Fg%2F12hptkp8w?hl=pl">
        <a
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__mapa-dojazdu--mapa-image"
            ]
          }
        >
          <Image
            src={`/images/.dedykowane-do-strony-konkretnej/infiniti/kontakt/mapa.png`}
            alt={`nie pyklo zdjecie`}
            // height={200}
            // width={100}
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>

      <div
        className={
          styles[
            "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container"
          ]
        }
      >
        <div
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--adres"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--adres--svg"
              ]
            }
          >
            <BiRocket color="white" />
          </div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--adres--linia"
              ]
            }
          ></div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--adres--tresc"
              ]
            }
          >
            <strong>INFINITI Fitness Club</strong>
            <br /> Al. Jana Pawła II 58, 47-232, Kędzierzyn-Koźle
          </div>
        </div>
        <div
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--godziny-otwarcia"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--godziny-otwarcia--svg"
              ]
            }
          >
            <BiTimeFive color="white" />
          </div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--godziny-otwarcia--linia"
              ]
            }
          ></div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--godziny-otwarcia--tresc"
              ]
            }
          >
            Poniedziałek – Piątek 07:00 – 22:00 <br />
            Sobota 08:00 – 20:00
            <br />
            Niedziela 08:00 – 18:00
          </div>
        </div>
        <div
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--telefon"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--telefon--svg"
              ]
            }
          >
            <BiPhone color="white" />
            {/* //hook2 - jak sylizowac masowo svg'ki improtowane z reat cions? jakis subselector? */}
          </div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--telefon--linia"
              ]
            }
          ></div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--telefon--tresc"
              ]
            }
          >
            {"(+48) 88 48 48 808"}
          </div>
        </div>
        <div
          className={
            styles[
              "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--email"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--email--svg"
              ]
            }
          >
            <HiOutlineMail color="white" />
          </div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--email--linia"
              ]
            }
          ></div>
          <div
            className={
              styles[
                "layout__infiniti-kontakt__cala-strona__dane-kontaktowe-container--email--tresc"
              ]
            }
          >
            info@infiniti-fit.pl
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default StronaKontakt;
