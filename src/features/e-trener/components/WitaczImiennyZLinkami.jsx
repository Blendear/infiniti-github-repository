//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import TytulZTlemKolorowym from "./TytulZTlemKolorowym";
// import ModalWylogowywania from "./ModalWylogowywania";
import dynamic from "next/dynamic";
import { useState } from "react";

const ModalWylogowywania = dynamic(() => import("./ModalWylogowywania"), {
  ssr: false,
});

const WitaczImiennyZLinkami = ({ user, isUstawieniaDostepne }) => {
  //
  const [isModalOtwarty, setIsModalOtwarty] = useState(false);

  return (
    <TytulZTlemKolorowym>
      {/* //       _._. AA */}
      <button
        onClick={() => {
          setIsModalOtwarty(true);
        }}
      >
        <RiLogoutBoxLine />
      </button>
      {isModalOtwarty && (
        <ModalWylogowywania setIsModalOtwarty={setIsModalOtwarty} />
      )}
      <div className={styles["child__css-class-name"]}>
        {(user ? `Hej ${user.name}!` : "Hej!").toUpperCase()}
        {/* hook1 - utnij dlugosc imienia usera, jesli przkeroczy liczbe, ktory mi psuje css. mp. 10 */}
      </div>

      <button>
        {isUstawieniaDostepne && (
          <Link href="https://billing.stripe.com/p/login/test_cN200H2EiboBbfy7ss">
            {/* /\ hook1 wstaw tu link z LIVE VERSION pozniej */}
            <a>
              <IoSettingsSharp />
            </a>
          </Link>
        )}
      </button>
    </TytulZTlemKolorowym>
  );
};
export default WitaczImiennyZLinkami;

//~~ _. WitaczImiennyZLinkami
//
//       _._. AA
//
//           _._._. AAA
//
//                  _._._._. AAAA
//
