import { useEffect, useState } from "react";
import { Modal, Backdrop } from "../../../components/e-trener";
import Link from "next/link";

const ModalPotwierdzajacyAkceptacjeRegulaminow = ({}) => {
  const [isTermsAndConditionsAccepted, setIsTermsAndConditionsAccepted] =
    useState(false);
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);
  const [isEverythingAccepted, setIsEverythingAccepted] = useState(false);

  return (
    <>
      {!isEverythingAccepted && (
        <Modal variant="information" hasBackdrop={true}>
          <article style={{}}>
            <p>Używając aplikacji INFINITI App akceptujesz:</p>
            <div>
              <input
                type="checkbox"
                name="regulamin"
                onChange={() => {
                  setIsTermsAndConditionsAccepted(
                    !isTermsAndConditionsAccepted
                  );
                }}
              />
              <Link
                download
                href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Regulamin_Infiniti_Fitness_Club_2023.pdf"
              >
                <a target="_blank">Regulamin INFINITI</a>
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                name="polityka-prywatnosci"
                onChange={() => {
                  setIsPrivacyPolicyAccepted(!isPrivacyPolicyAccepted);
                }}
              />
              <Link
                download
                href="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/dokumenty/Polityka_Prywatności_Fit-Food-Group_01.2023.pdf"
              >
                <a target="_blank">Polityka prywatności</a>
              </Link>
            </div>
            <button
              onClick={() => {
                setIsEverythingAccepted(true);
              }}
            >
              {isTermsAndConditionsAccepted && isPrivacyPolicyAccepted
                ? "Akceptuję"
                : "Zatwierdź przeczytanie obydwu dokumentów, aby przejść dalej"}
            </button>
          </article>
        </Modal>
      )}
    </>
  );
};
export default ModalPotwierdzajacyAkceptacjeRegulaminow;
