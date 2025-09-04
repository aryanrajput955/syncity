// app/layout.js
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ClientWrapper from "./components/clientwrapper"; // 👈 new client component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-inter: ${inter.variable};
            --font-playfair: ${playfair.variable};
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
