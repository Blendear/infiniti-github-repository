const SVGElektro3 = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="36"
      viewBox="0 0 29 36"
      fill="none"
    >
      <path
        d="M17.1377 23.9381V19.6047C17.1377 18.5002 18.0331 17.6047 19.1377 17.6047H24.9998C26.1043 17.6047 26.9998 18.5002 26.9998 19.6047V23.9381C26.9998 25.0427 26.1043 25.9381 24.9998 25.9381H19.1377C18.0331 25.9381 17.1377 25.0427 17.1377 23.9381Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5.48291 30.6049V29.6049C5.48291 28.5003 6.37834 27.6049 7.48291 27.6049H9.75877C10.8633 27.6049 11.7588 28.5003 11.7588 29.6049V30.6049C11.7588 31.7094 10.8633 32.6049 9.75877 32.6049H7.48291C6.37834 32.6049 5.48291 31.7094 5.48291 30.6049Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M1 19.7715V16.2715C1 15.1669 1.89543 14.2715 3 14.2715H7.96552C9.07009 14.2715 9.96552 15.1669 9.96552 16.2715V19.7715C9.96552 20.8761 9.07009 21.7715 7.96552 21.7715H3C1.89543 21.7715 1 20.8761 1 19.7715Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5.93083 19.2715C5.51991 22.8056 5.91317 25.0854 7.33153 28.0689C8.07143 29.6252 9.67063 30.5417 11.3853 30.7137C15.4265 31.1191 17.7115 32.0456 20.2757 34.2715"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M22.5171 23.4382C22.6655 27.7521 23.9268 29.1538 26.9998 30.9383"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2 5.83652C4 10.3356 7.01168 12.0477 10 5.83652C12.9883 -0.374614 15.5241 -0.84544 18.5 5.83652C21.4759 12.5185 25.5 9.33562 27.5 5.83652"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGElektro3;
