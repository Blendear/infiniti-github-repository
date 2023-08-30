//
//  Dodatkowo dodałem linijki pod:
//
//  0.  Startowy Next.js component
//
//  1.  "Next-Auth", a dokładniej żeby "Session" sexownie było dostępne w całej apce
//
//  2.  "Redux"
//
//  3.  "Layout" - pod zawartośc stronki, ktora ma być na KAŻDEJ page. Np. nawigacja górnja i footer dolny z informacjami/kontaktem etc.
//
import "src/styles/sass/globals.scss";
import store from "../store/redux/store-redux";
import { Provider } from "react-redux";
import Script from "next/script";
import Layout from "../components/0-layout-i-wrappers/layout/layout";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }: any) {
  return (
    //
    //  2.  "Redux"
    //
    <Provider store={store}>
      {/* 
          1.  "Next-Auth", a dokładniej żeby "Session" sexownie było dostępne w całej apce
      */}
      <UserProvider>
        {/* 
        3.  "Layout" - pod zawartośc stronki, ktora ma być na KAŻDEJ page. Np. nawigacja górnja i footer dolny z informacjami/kontaktem etc.
        */}

        <Layout>
          {/* 
            0.  Startowy Next.js component
          */}
          <Head>
            <title>INFINITI - Centrum Zdrowia, Siłownia & Klub Fitness</title>
            <meta
              name="description"
              content="W ofercie również : Fizjoterapia & Naturoterapia I Sztuki walki (MMA) I Squash I Yoga I Sauna"
            />

            <meta
              name="facebook-domain-verification"
              content="msjkv4nhdzxgfnlhrjp6cv0hr4wmt9"
            />
          </Head>
          <Script
            src="https://www.googletagmanager.com/ns.html?id=GTM-P55GM5R"
            strategy="afterInteractive"
          ></Script>
          <Script
            id="google-analytics-script-1"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P55GM5R');`,
            }}
          ></Script>
          <Script
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4DQ4QK"
            strategy="afterInteractive"
          ></Script>
          <Script
            id="google-analytics-script-2"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W4DQ4QK');`,
            }}
          ></Script>

          <Script
            src="https://www.facebook.com/tr?id=880910876520648&ev=PageView&noscript=1"
            strategy="afterInteractive"
          ></Script>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '880910876520648');
              fbq('track', 'PageView');`,
            }}
          ></Script>

          <Script
            src="https://www.facebook.com/tr?id=790313702085892&ev=PageView&noscript=1"
            strategy="afterInteractive"
          ></Script>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '790313702085892');
              fbq('track', 'PageView');`,
            }}
          ></Script>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
