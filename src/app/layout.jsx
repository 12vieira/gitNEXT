import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-purple-800 ">
          <ul className="flex text-amber-300 p-4 justify-around">
            <li><Link className="ms-2" href="/">Home</Link></li>
            <li><Link className="ms-2" href="/sobre" >Sobre</Link></li>
            <li><Link className="ms-2" href="/posts" >Posts</Link></li>
            <li><Link className="ms-2" href="/produtos/categorias/diversos">Produtos</Link></li>
            <li><Link className="ms-2" href="/perfil">Perfil</Link></li>
          </ul>
        </nav> 

        {children}

        <Footer/>

      </body>
    </html>
  );
}
