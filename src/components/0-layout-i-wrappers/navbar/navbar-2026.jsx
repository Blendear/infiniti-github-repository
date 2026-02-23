/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

// ================= MENU =================
const menuData = [
  { label: "Start", href: "/strona-glowna-infiniti" },
  {
    label: "Grafik / Zapisz się",
    href: "https://infiniti-kk-cms.efitness.com.pl/kalendarz-zajec",
  },
  { label: "Usługi medyczne", href: "/strona-glowna-infiniti/medical/uslugi" },
  {
    label: "Cennik",
    href: null, // brak href -> tylko pokazuje submenu
    children: [
      { label: "Fitness / Squash / Sauna / Solarium", href: "/cennik/fitness" },
      { label: "Masaż", href: "/cennik/masaze" },
      { label: "Fizjoterapia", href: "/cennik/fizjoterapia" },
      { label: "Fizjoterapia dziecięca", href: "/cennik/fizjoterapia-dzieci" },
      { label: "Ortopedia", href: "/cennik/ortopedia" },
    ],
  },
  {
    label: "Kadra",
    href: null,
    children: [
      {
        label: "Ortopedzi",
        href: "/strona-glowna-infiniti/medical/kadra-ortopedzi",
      },
      {
        label: "Fizjoterapeuci",
        href: "/strona-glowna-infiniti/medical/kadra",
      },
      { label: "Fitness", href: "/strona-glowna-infiniti/fitness/kadra" },
    ],
  },
  {
    label: "Do pobrania",
    href: "/strona-glowna-infiniti/infiniti/do-pobrania",
  },
  { label: "Kontakt", href: "/strona-glowna-infiniti/infiniti/kontakt" },
];

// ================= COMPONENT =================
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav css={navbar}>
        <Link href="/strona-glowna-infiniti">
          <a css={logo}>
            <Image
              src="/images/.dedykowane-do-strony-konkretnej/infiniti/do-pobrania/logo/infiniti/cropped-for-navbar.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </a>
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <ul css={desktopMenu}>
          {menuData.map((item, index) => (
            <li key={item.label} css={desktopItem}>
              {item.href && (
                <Link href={item.href}>
                  <a>{item.label}</a>
                </Link>
              )}
              {!item.href && <span>{item.label}</span>}

              {item.children && (
                <ul css={desktopDropdown}>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href}>
                        <a>{child.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* ===== HAMBURGER (MOBILE) ===== */}
        <button css={hamburger} onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* ===== MOBILE MENU MODAL ===== */}
      {menuOpen && (
        <div css={mobileModal}>
          <button css={closeBtn} onClick={() => setMenuOpen(false)}>
            <IoMdClose />
          </button>

          <div css={mobileMenu}>
            {menuData.map((item, index) => (
              <div key={item.label}>
                {/* Tylko jeśli element ma children -> pokazuje submenu, nie link */}
                {item.children ? (
                  <button
                    css={mobileTitle}
                    onClick={() =>
                      setOpenMobileIndex(
                        openMobileIndex === index ? null : index,
                      )
                    }
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.href}>
                    <a css={mobileTitle} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  </Link>
                )}

                {item.children && (
                  <div
                    css={[
                      mobileSubmenu,
                      openMobileIndex === index && mobileSubmenuOpen,
                    ]}
                  >
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        <a css={mobileItem} onClick={() => setMenuOpen(false)}>
                          {child.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* =========================
   EMOTION STYLES
========================= */

const navbar = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.5rem 2rem",
  background: "#fff",
  borderBottom: "1px solid #eee",
  position: "fixed",
  zIndex: 1001,
  width: "100%",
  boxShadow: "0px 0px 13px 5px rgba(0,0,0,0.15)",
});

const logo = css({
  position: "relative", // potrzebne dla layout="fill" w Next Image
  width: "25px",
  aspectRatio: "1/1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
});

/* ===== DESKTOP ===== */

const desktopMenu = css({
  display: "flex",
  gap: "4rem",

  "@media (max-width: 880px)": {
    display: "none",
  },
});

const desktopItem = css({
  listStyle: "none",
  position: "relative",
  fontSize: "1.6rem",
  cursor: "pointer",

  "&:hover ul": {
    opacity: 1,
    transform: "translateY(0)",
    pointerEvents: "auto",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0,
    height: "3px", // grubość podkreślenia
    backgroundColor: "#3C9FDB", // niebieska linia
    transition: "width 0.3s ease",
  },

  "&:hover::after": {
    width: "100%", // linia w pełnej szerokości elementu
  },
});

const desktopDropdown = css({
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#fff",
  listStyle: "none",
  padding: "1rem 0",
  minWidth: "200px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",

  opacity: 0,
  transform: "translateY(10px)",
  pointerEvents: "none",
  transition: "all 0.3s ease",

  "& li": {
    padding: "0.8rem 1.5rem",
    whiteSpace: "nowrap",
  },

  "& li:hover": {
    background: "#f2f6ff",
  },
});

/* ===== HAMBURGER ===== */

const hamburger = css({
  display: "none",
  background: "none",
  border: "none",
  fontSize: "2.4rem",
  cursor: "pointer",

  "@media (max-width: 880px)": {
    display: "block",
  },
});

/* ===== MOBILE MODAL ===== */

const mobileModal = css({
  position: "fixed",
  inset: 0,
  background: "#fff",
  zIndex: 1002,

  "@media (min-width: 880px)": {
    display: "none",
  },
});

const closeBtn = css({
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  fontSize: "3.5rem",
  background: "none",
  border: "none",
  cursor: "pointer",
});

const mobileMenu = css({
  padding: "6rem 2rem",

  "& div:nth-of-type(4) button": {
    padding: "0.5rem 0 0rem 0",
  },

  "& div:nth-of-type(5) button": {
    padding: "1rem 0 0.5rem 0",
  },
});

const mobileTitle = css({
  fontSize: "2.2rem",
  fontWeight: 700,
  background: "none",
  border: "none",
  padding: "1rem 0",
  width: "100%",
  textAlign: "left",
  cursor: "pointer",
  color: "rgba(0, 0, 0, 0.8)",
});

const mobileSubmenu = css({
  maxHeight: 0,
  overflow: "hidden",
  transition: "max-height 0.3s ease",
  display: "grid",
  gridAutoFlow: "row",
});

const mobileSubmenuOpen = css({
  maxHeight: "300px",
});

const mobileItem = css({
  padding: "0.6rem 1.5rem",
  fontSize: "2.2rem",
});
