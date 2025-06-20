import { DM_Sans } from "next/font/google";
import "./globals.css";
import { StateContext } from "./utils/context/context";

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
      <body
        className={`antialiased`}
      >
        <StateContext>
          {children}
        </StateContext>
      </body>
    </html>
  );
}
