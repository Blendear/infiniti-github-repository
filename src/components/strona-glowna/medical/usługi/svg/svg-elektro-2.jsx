const SVGElektro2 = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  //hook1 - protip1 - MAM SPOSOB NA DYNAMICZNE KOLORY SVG \/ - PODAJESZ "FILL" OR INNE PROPERTY POPRZEZ PROPS
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="34"
      viewBox="0 0 29 34"
      fill="none"
    >
      <path
        d="M17.1377 22.6666V18.3333C17.1377 17.2287 18.0331 16.3333 19.1377 16.3333H24.9998C26.1043 16.3333 26.9998 17.2287 26.9998 18.3333V22.6666C26.9998 23.7712 26.1043 24.6666 24.9998 24.6666H19.1377C18.0331 24.6666 17.1377 23.7712 17.1377 22.6666Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5.48291 29.3334V28.3334C5.48291 27.2288 6.37834 26.3334 7.48291 26.3334H9.75877C10.8633 26.3334 11.7588 27.2288 11.7588 28.3334V29.3334C11.7588 30.438 10.8633 31.3334 9.75877 31.3334H7.48291C6.37834 31.3334 5.48291 30.438 5.48291 29.3334Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M1 18.5V15C1 13.8954 1.89543 13 3 13H7.96552C9.07009 13 9.96552 13.8954 9.96552 15V18.5C9.96552 19.6046 9.07009 20.5 7.96552 20.5H3C1.89543 20.5 1 19.6046 1 18.5Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5.93083 18C5.51991 21.5341 5.91317 23.8139 7.33153 26.7974C8.07143 28.3538 9.67063 29.2702 11.3853 29.4422C15.4265 29.8476 17.7115 30.7741 20.2757 33"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M22.5171 22.1667C22.6655 26.4806 23.9268 27.8823 26.9998 29.6668"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5 7C6.65685 7 8 5.65685 8 4C8 2.34315 6.65685 1 5 1C3.34315 1 2 2.34315 2 4C2 5.65685 3.34315 7 5 7Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M15 12C16.6569 12 18 10.6569 18 9C18 7.34315 16.6569 6 15 6C13.3431 6 12 7.34315 12 9C12 10.6569 13.3431 12 15 12Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M25 7C26.6569 7 28 5.65685 28 4C28 2.34315 26.6569 1 25 1C23.3431 1 22 2.34315 22 4C22 5.65685 23.3431 7 25 7Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGElektro2;
