/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const firstColor = "#3C9FDB";
const secondColor = "#ffffff";

const getButtonStyles = (variant) => {
  const isA = variant === "A";

  return css({
    userSelect: "none",
    width: "clamp(200px, 20vw, 15rem)",
    maxWidth: "18rem",
    aspectRatio: "5/1.8",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    border: `2px solid ${firstColor}`,
    borderRadius: "50px",
    backgroundColor: isA ? secondColor : firstColor,
    color: isA ? firstColor : secondColor,
    fontSize: "clamp(1.75rem, 3.5vw, 2.1rem)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",

    "@media (max-width: 600px)": {
      fontSize: "clamp(1.7rem, 3.5vw, 2.1rem)",
    },

    "&:hover": {
      backgroundColor: isA ? firstColor : secondColor,
      color: isA ? secondColor : firstColor,
    },

    "& > p": {
      margin: 0,
    },
  });
};

export const ButtonUniversal = ({
  children,
  variant = "B",
  href,
  onClick,
  className,
  target,
  rel,
}) => {
  const buttonStyle = getButtonStyles(variant);
  const content = typeof children === "string" ? <p>{children}</p> : children;

  // 1. Zewnętrzny link HTTP/HTTPS
  if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
    return (
      <a
        href={href}
        css={buttonStyle}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  // 2. Wewnętrzny link Next.js
  if (href) {
    return (
      <Link href={href} passHref>
        <a css={buttonStyle} className={className} onClick={onClick}>
          {content}
        </a>
      </Link>
    );
  }

  // 3. Zwykły przycisk
  return (
    <button
      type="button"
      css={buttonStyle}
      className={className}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonUniversal;
