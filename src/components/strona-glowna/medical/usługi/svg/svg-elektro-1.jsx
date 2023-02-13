const SVGElektro1 = (props) => {
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
      width="28"
      height="34"
      viewBox="0 0 28 34"
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
        d="M3 3.99997C4.93242 3.70893 5.91941 3.50606 7.11669 3.18213C7.4743 3.08538 7.81729 2.94213 8.14592 2.77112C13.1781 0.152504 15.9914 0.604555 20.7692 3.03308C22.3987 3.63897 23.3285 3.8176 25 3.99997"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M25 6.00002C23.0676 6.29107 22.0806 6.49394 20.8833 6.81786C20.5257 6.91462 20.1827 7.05787 19.8541 7.22888C14.8219 9.8475 12.0086 9.39545 7.23077 6.96692C5.60126 6.36103 4.67153 6.1824 3 6.00003"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGElektro1;
