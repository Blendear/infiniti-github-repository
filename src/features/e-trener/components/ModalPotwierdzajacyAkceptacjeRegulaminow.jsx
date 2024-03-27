/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "src/styles/emotion/abstracts/universal";
import { useState } from "react";
import { Modal } from "../../../components/e-trener";
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
    padding: "2rem",
    width: "80vw",
    maxWidth: "40rem",
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: "1rem",
    display: "grid",
    justifyItems: "start",
    gridAutoRows: "max-content",
    rowGap: "3rem",
    border: "5px solid purple",

    "@media (min-width: 450px)": {
      padding: "3rem",
    },
  }),

  title: css({
    color: "black",
    fontWeight: "bold",
    fontSize: "min(2rem, 3.45vw)",
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
    },
  ]),
};

const ModalPotwierdzajacyAkceptacjeRegulaminow = ({}) => {
  const [isTermsAndConditionsAccepted, setIsTermsAndConditionsAccepted] =
    useState(false);

  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);

  const [isEverythingAccepted, setIsEverythingAccepted] = useState(() => {
    return localStorage.getItem("isEverythingAccepted") || false;
    // return false;
  });

  const saveAcceptance = () => {
    localStorage.setItem("isEverythingAccepted", true);
  };

  return (
    <>
      <DialogModal isOpen={!isEverythingAccepted}>
        <div css={modal.containerBackdropAndContent}>
          <article css={modal.containerContent}>
            <p css={modal.title}>
              Używając aplikacji INFINITI App akceptujesz:
            </p>
            <div css={modal.checkboxWithText}>
              <input
                type="checkbox"
                name="regulamin"
                css={{
                  accentColor: "purple",
                }}
                onChange={(e) => {
                  setIsTermsAndConditionsAccepted(e.target.checked);
                }}
              />
              <p>Regulamin</p>
              <Link
                download
                href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Regulamin_Infiniti_Fitness_Club_2023.pdf"
              >
                <a target="_blank">{"(Link)"}</a>
              </Link>
            </div>
            <div css={modal.checkboxWithText}>
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
                <a target="_blank">{"(Link)"}</a>
              </Link>
            </div>
            <button
              css={[
                universalCss.button(
                  isTermsAndConditionsAccepted && isPrivacyPolicyAccepted,
                  "white",
                  "purple"
                ),
                modal.buttonAccept,
              ]}
              disabled={
                !isTermsAndConditionsAccepted || !isPrivacyPolicyAccepted
              }
              onClick={() => {
                isTermsAndConditionsAccepted &&
                  isPrivacyPolicyAccepted &&
                  (saveAcceptance(), setIsEverythingAccepted(true));
              }}
            >
              {isTermsAndConditionsAccepted && isPrivacyPolicyAccepted
                ? "Akceptuję"
                : "Zaznacz wszystkie zgody"}
            </button>
          </article>
        </div>
      </DialogModal>
    </>
  );
};
export default ModalPotwierdzajacyAkceptacjeRegulaminow;
