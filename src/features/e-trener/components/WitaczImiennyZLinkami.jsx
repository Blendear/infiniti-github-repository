/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import TytulZTlemKolorowym from "./TytulZTlemKolorowym";
import dynamic from "next/dynamic";
import { useState } from "react";

/* Wylogowywanie modalem jest wykomentowane, dopóki wstrzymane jest logowanie Auth0 */
// const ModalWylogowywania = dynamic(() => import("./ModalWylogowywania"), {
//   ssr: false,
// });

const witaczCss = {
  container: css({}),
  buttonBack: css({
    "&:hover": {
      cursor: "pointer",
    },
  }),
};

const WitaczImiennyZLinkami = ({ user, isUstawieniaDostepne }) => {
  //
  const [isModalOtwarty, setIsModalOtwarty] = useState(false);

  return (
    <TytulZTlemKolorowym>
      <Link href="/strona-glowna-infiniti">
        <a css={witaczCss.buttonBack}>
          <RiLogoutBoxLine />
        </a>
      </Link>
      {/* Wylogowywanie modalem jest wykomentowane, dopóki wstrzymane jest logowanie Auth0 */}
      {/* <button
        onClick={() => {
          setIsModalOtwarty(true);
        }}
      >
          <RiLogoutBoxLine />
      </button> */}
      {/* {isModalOtwarty && (
        <ModalWylogowywania setIsModalOtwarty={setIsModalOtwarty} />
      )} */}

      <span className={styles["child__css-class-name"]}>
        {(user
          ? "Witaj w Infiniti App !"
          : // `Hej ${user.name.split(" ")[0].substr(0, 12)}`
            "Witaj w Infiniti App!"
        ).toUpperCase()}
        {/* hook1 - utnij dlugosc imienia usera, jesli przkeroczy liczbe, ktory mi psuje css. mp. 10 */}
      </span>

      {/* <button>
        {isUstawieniaDostepne && (
          <Link href="https://billing.stripe.com/p/login/test_cN200H2EiboBbfy7ss">
          
            <a>
              <IoSettingsSharp />
            </a>
          </Link>
        )}
      </button> */}
      <div></div>
    </TytulZTlemKolorowym>
  );
};
export default WitaczImiennyZLinkami;
