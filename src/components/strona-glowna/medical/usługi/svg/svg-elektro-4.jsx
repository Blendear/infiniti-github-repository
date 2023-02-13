const SVGElektro4 = (props) => {
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
      height="32"
      viewBox="0 0 29 32"
      fill="none"
    >
      <path
        d="M17.1377 20.6666V16.3333C17.1377 15.2287 18.0331 14.3333 19.1377 14.3333H24.9998C26.1043 14.3333 26.9998 15.2287 26.9998 16.3333V20.6666C26.9998 21.7712 26.1043 22.6666 24.9998 22.6666H19.1377C18.0331 22.6666 17.1377 21.7712 17.1377 20.6666Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5.48291 27.3334V26.3334C5.48291 25.2288 6.37834 24.3334 7.48291 24.3334H9.75877C10.8633 24.3334 11.7588 25.2288 11.7588 26.3334V27.3334C11.7588 28.438 10.8633 29.3334 9.75877 29.3334H7.48291C6.37834 29.3334 5.48291 28.438 5.48291 27.3334Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M1 16.5V13C1 11.8954 1.89543 11 3 11H7.96552C9.07009 11 9.96552 11.8954 9.96552 13V16.5C9.96552 17.6046 9.07009 18.5 7.96552 18.5H3C1.89543 18.5 1 17.6046 1 16.5Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5.93083 16C5.51991 19.5341 5.91317 21.8139 7.33153 24.7974C8.07143 26.3538 9.67063 27.2702 11.3853 27.4422C15.4265 27.8476 17.7115 28.7741 20.2757 31"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M22.5171 20.1667C22.6655 24.4806 23.9268 25.8823 26.9998 27.6668"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2 2.56496C5.62768 5.5537 8 4.62992 10 2.56496C12 0.5 16.5 0.500021 18.5 2.56496C20.5 4.6299 24.4538 5.14493 27.5 2.56496"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGElektro4;
