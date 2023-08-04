//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import TytulZTlemKolorowym from "./TytulZTlemKolorowym";
const WitaczImiennyZLinkami = ({ propA, propB }) => {
  return (
    <TytulZTlemKolorowym>
      {/* //       _._. AA */}
      <button>
        <RiLogoutBoxLine />
      </button>
      <div className={styles["child__css-class-name"]}>
        Hej [imie usera z Auth0]!
      </div>
      <button>
        <Link href={`hook1 - tu wklej link do customer portalu`}>
          <a>
            <IoSettingsSharp />
          </a>
        </Link>
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
