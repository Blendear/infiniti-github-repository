import Navbar from "../navbar/navbar";
import Footer from "../../0-layout-i-wrappers/footer/footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const showFooter = router.pathname.includes("/e-trener") ? false : true;
  console.log(showFooter ? "bez footera" : "footer tak");

  return (
    <div>
      <Navbar />

      <main>{children}</main>
      {/* //protip1 - \/ condiitonally rendered footer, based on current pathname */}
      {showFooter && <Footer />}
    </div>
  );
}
