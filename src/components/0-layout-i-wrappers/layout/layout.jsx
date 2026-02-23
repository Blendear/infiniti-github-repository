import Navbar from "../navbar/navbar";
import Footer from "../../0-layout-i-wrappers/footer/footer";
import { useRouter } from "next/router";
import NavbarNew from "../navbar/navbar-2026";

export default function Layout({ children }) {
  const router = useRouter();
  const showFooter = router.pathname.includes("/infiniti-app") ? false : true;

  return (
    <div>
      {/* <Navbar /> */}
      <NavbarNew />

      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
