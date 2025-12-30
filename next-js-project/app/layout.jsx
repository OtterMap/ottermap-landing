import { DM_Sans } from "next/font/google";
import "./globals.css";
import { StateContext } from "./utils/context/context";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ottermap",
  description: "Ottermap is a landscape property measurement platform that generates  automated maps in 4 clicks, it serves the outdoor industry in the US.  Get accurate landscape property measurement for any dimensions in just 4 easy steps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
        <meta name="google-site-verification" content="ZgIC_qplkLbmcswEo5ce2kbF9nGvNGvmkyRZYaQ_Ex8" />

      </head>
      <body
        className={`antialiased`}
      >
        <StateContext>
          {children}
        </StateContext>
        <Script id="tawk-chat" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/695375369f6a11197d933e10/1jdn03njg';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

      </body>
    </html>
  );
}
