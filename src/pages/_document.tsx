//
// Table of content for this file is written at the bottom
//
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        {/*//       _._. "On top of pages content" code, like Modals, Backdrops, Tooltips etc. - the id will be references by React's Portals*/}
        <div id="modal"></div>
        <div id="backdrop"></div>
        <div id="tooltip"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//
//~~ _.  A - hook1 how to call this file. its simply a "index.html" clone for next.js
//
//       _._. "On top of pages content" code, like Modals, Backdrops, Tooltips etc. - the id will be references by React's Portals
//
