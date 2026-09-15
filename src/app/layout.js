import { Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import AOSProvider from "./components/AOSProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ar Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar name="Ar Portfolio" /> */}
        <main className="pt-20">
          <AOSProvider />
          {children}
        </main>
      </body>
    </html>
  );
}
