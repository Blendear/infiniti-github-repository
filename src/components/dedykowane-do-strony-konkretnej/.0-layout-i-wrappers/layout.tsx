//
//  "Layout" = zawartośc stronki, ktora ma być na KAŻDEJ page. Np. nawigacja górnja i footer dolny z informacjami/kontaktem etc.
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

import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
