import React from "react";
import "../CSS/index.css";
import SiteHeader from "../Components/Header";
import localFont from "next/font/local";
import Footer from "../Components/Footer";

export const metadata = {
  description: "Et starterprosjekt for Payload CMS, bygget med Docker",
  title: "Payload CMS",
};

const oswald = localFont({
  src: "../fonts/Oswald-VariableFont_wght.ttf",
  variable: "--oswald",
});

const bodoni = localFont({
  src: "../fonts/BodoniModa-VariableFont_opsz,wght.ttf",
  variable: "--bodoni",
});

const patrickHand = localFont({
  src: "../fonts/PatrickHand-Regular.ttf",
  variable: "--patrickkHand",
});

const inter = localFont({
  src: "../fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--inter",
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body className="noise-texture">
        <SiteHeader />
        <>{children}</>
        <Footer></Footer>
      </body>
    </html>
  );
}
