import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./custom.scss"
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



const mont = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sprout & Co",
  description: "Fresh Produce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


