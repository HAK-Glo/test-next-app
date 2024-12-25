import Image from "next/image";

export default function Home() {
  return (
    <>
      <Script
        id="next"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-1XC4SRFQ7Y`}
      ></Script>
      <Script id="next">
        {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-1XC4SRFQ7Y');`}
      </Script>
      <main className={styles.main}>
        <h2>Hello, This is nextjs app with Google analytics.</h2>
      </main>
    </>
  );
}
