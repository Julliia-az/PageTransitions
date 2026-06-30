import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const InstrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const InstrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grid Shutter Page Transition | Codegrid",
  description: "Grid Shutter Page Transition | Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${InstrumentSerif.variable} ${InstrumentSans.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
