import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "aurora – Wohnen mit Weitblick",
  description:
    "Wenn das Morgenlicht den Horizont färbt, erwacht ein neues Wohngefühl. «Aurora» verbindet die Dynamik urbanen Lebens mit der Ruhe des Grüns. Hier trifft Weitblick auf Geborgenheit und Moderne auf Behaglichkeit.",
  keywords: [
    "aurora",
    "Spreitenbach",
    "Dein geborgenes Zuhause",
    "Erstvermietung",
    "charmant ",
    "komfortabel",
    "hell",
  ],
  authors: [{ name: "H&B Real Estate AG", url: "https://www.hbre.ch/" }],
  openGraph: {
    title: "aurora – Wohnen mit Weitblick",
    description:
      "Wenn das Morgenlicht den Horizont färbt, erwacht ein neues Wohngefühl. «Aurora» verbindet die Dynamik urbanen Lebens mit der Ruhe des Grüns. Hier trifft Weitblick auf Geborgenheit und Moderne auf Behaglichkeit.",
    siteName: "aurora – Wohnen mit Weitblick",
  },
  images: [
    {
      url: "https://www.aurora-spreitenbach.ch/visus/visu.jpg",
      width: 400,
      height: 200,
    },
  ],
  locale: "de-CH",
  type: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className="scroll-smooth">
      <body
        className={`w-screen h-screen text-text_primary text-body_mobile xl:text-body_desktop font-quicksand `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
