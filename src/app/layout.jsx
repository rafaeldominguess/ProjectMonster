import { Inter, Changa_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const changaone = Changa_One({
  weight: "400",
  variable: "--font-changaone",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monster Energy | Unleash the Beast - Conceptual Showcase",
  description:
    "An interactive showcase exploring the energy, flavors, and bold attitude of Monster Energy. Built with high-performance front-end architecture and dark industrial design.",
  openGraph: {
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${changaone.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className={`min-h-full scroll-smooth flex  flex-col bg-[#FFFFFF] ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
