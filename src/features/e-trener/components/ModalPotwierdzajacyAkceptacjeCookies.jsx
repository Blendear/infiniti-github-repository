/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "src/styles/emotion/abstracts/universal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DialogModal } from "../../dialog-modals/components/DialogModal";

const modal = {
  containerBackdropAndContent: css({
    height: "100%",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  }),

  containerContent: css({
    justifySelf: "center",
    margin: "0 40px",
    padding: "2rem 1.25rem",
    // width: "80vw",
    maxWidth: "60rem",
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: "1rem",
    display: "grid",
    justifyItems: "center",
    gridAutoRows: "max-content",
    rowGap: "3rem",
    border: "5px solid purple",

    "@media (min-width: 450px)": {
      padding: "3rem",
    },
  }),

  title: css({
    maxHeight: "20rem",
    overflowY: "scroll",
    // show the scroll bar, even though global styles set "webkit-scrollbar" to "display: none"
    // "&::-webkit-scrollbar": {
    //   display: "block",
    // },
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: "min(2rem, 3.45vw)",

    // Custom scrollbar styles
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "lightgrey",
      borderRadius: "10px",
      // boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      backgroundColor: "purple",
    },
  }),

  checkboxWithText: css({
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "5px",
    fontSize: "min(2rem, 3.45vw)",

    "& *": {
      color: "black",
      fontWeight: "bold",
    },

    "& input": {
      alignSelf: "center",
      width: "min(2rem, 3.45vw)",
      height: "min(2rem, 3.45vw)",
      cursor: "pointer",
    },

    "& a": {
      color: "purple",
      textDecoration: "none",
    },
  }),

  buttonAccept: css([
    {
      justifySelf: "center",

      "&:hover": {
        cursor: "pointer",
      },
    },
  ]),
};

const ModalPotwierdzajacyAkceptacjeCookies = ({}) => {
  // const [isTermsAndConditionsAccepted, setIsTermsAndConditionsAccepted] =
  //   useState(false);
  //
  // const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);

  const [isEverythingAccepted, setIsEverythingAccepted] = useState(true);

  useEffect(() => {
    localStorage.getItem("isEverythingAccepted");

    if (localStorage.getItem("isEverythingAccepted")) {
      setIsEverythingAccepted(true);
    } else {
      setIsEverythingAccepted(false);
    }
  }, []);

  const saveAcceptance = () => {
    localStorage.setItem("isEverythingAccepted", true);
  };

  return (
    <>
      <DialogModal isOpen={!isEverythingAccepted}>
        <div css={modal.containerBackdropAndContent}>
          <article css={modal.containerContent}>
            <p css={modal.title}>
              Strona używa plików cookies w celu poprawy jej funkcjonalności
              oraz dostosowania jej do Twoich potrzeb. Pliki cookies służą do
              przechowywania informacji o Twoich preferencjach, ustawieniach
              konta użytkownika, a także do zbierania anonimowych danych
              statystycznych, które pozwalają nam lepiej zrozumieć, jak
              korzystasz z naszej strony.
              <br />
              Klikając &quot;Akceptuję&quot;, wyrażasz zgodę na używanie plików
              cookies. Więcej informacji na temat plików cookies znajdziesz w
              &quot;Polityce Cookies&quot;.
            </p>
            <div css={modal.checkboxWithText}>
              {/* <input
                type="checkbox"
                name="regulamin"
                css={{
                  accentColor: "purple",
                }}
                onChange={(e) => {
                  setIsTermsAndConditionsAccepted(e.target.checked);
                }}
              /> */}
              {/* <p>Regulamin</p> */}
              <Link
                download
                href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Polityka Cookies.pdf"
              >
                <a target="_blank">{"Polityka cookies"}</a>
              </Link>
            </div>
            {/* <div css={modal.checkboxWithText}>
              <input
                type="checkbox"
                name="polityka-prywatnosci"
                css={{
                  accentColor: "purple",
                }}
                onChange={(e) => {
                  setIsPrivacyPolicyAccepted(e.target.checked);
                }}
              />
              <p>Polityka Prywatności</p>
              <Link
                download
                href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Polityka_Prywatności_Fit-Food-Group_01.2023.pdf"
              >
                <a target="_blank">{"Polityka prywatności"}</a>
              </Link>
            </div> */}
            <button
              css={[
                universalCss.button(
                  true,
                  // isTermsAndConditionsAccepted && isPrivacyPolicyAccepted,
                  "white",
                  "purple"
                ),
                modal.buttonAccept,
              ]}
              // disabled={
              //   !isTermsAndConditionsAccepted || !isPrivacyPolicyAccepted
              // }
              onClick={() => {
                // isTermsAndConditionsAccepted &&
                //   isPrivacyPolicyAccepted &&
                saveAcceptance(), setIsEverythingAccepted(true);
              }}
            >
              {/* {isTermsAndConditionsAccepted && isPrivacyPolicyAccepted
                ? */}
              Akceptuję
              {/* : "Zaznacz wszystkie zgody"} */}
            </button>
          </article>
        </div>
      </DialogModal>
    </>
  );
};
export default ModalPotwierdzajacyAkceptacjeCookies;
