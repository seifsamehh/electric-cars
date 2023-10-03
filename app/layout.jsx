import Script from "next/script";
import "./globals.css";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Electric Cars",
  description:
    "Electric Cars is your one-stop shop for all things electric cars. We offer a wide selection of new and used electric cars from top brands, as well as a variety of financing options to make it easy to buy your next electric car. We also have a team of experts who can help you find the perfect electric car for your needs.",
  generator: "Next.js",
  applicationName: "Electric Cars",
  referrer: "origin-when-cross-origin",
  keywords: [
    "electric cars",
    "electric vehicles",
    "EVs",
    "green cars",
    "sustainable cars",
    "Tesla",
    "Chevrolet",
    "Nissan",
    "Hyundai",
    "charging stations",
    "financing",
    "warranty",
    "maintenance",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-eldin-sameh.vercel.app/" },
  ],
  colorScheme: "dark",
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  image: "/maskable_icon.png",
  canonical: "https://electric-cars.vercel.app",
  metadataBase: "https://electric-cars.vercel.app",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf4f4" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1E1E" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/icon-192x192.png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  openGraph: {
    title: "Electric Cars",
    description:
      "Electric Cars is your one-stop shop for all things electric cars. We offer a wide selection of new and used electric cars from top brands, as well as a variety of financing options to make it easy to buy your next electric car. We also have a team of experts who can help you find the perfect electric car for your needs.",
    url: "https://electric-cars.vercel.app",
    siteName: "Electric Cars",
    images: [
      {
        url: "/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Electric Cars",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Electric Cars",
    description:
      "Electric Cars is your one-stop shop for all things electric cars. We offer a wide selection of new and used electric cars from top brands, as well as a variety of financing options to make it easy to buy your next electric car. We also have a team of experts who can help you find the perfect electric car for your needs.",
    images: [
      {
        url: "/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Electric Cars",
      },
    ],
    creator: "@SeifSameh",
    url: "https://electric-cars.vercel.app",
    card: "/maskable_icon.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Electric Cars",
};

// +/**
// + * Render the root layout of the application.
// + *
// + * @param {Object} children - The child components to be rendered.
// + * @return {JSX.Element} - The root layout JSX element.
// + */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        {children}
        <Script
          id="shortcuts"
          src="/shortcuts.js"
          defer
          rel="preload"
          as="script"
        />
        <Script
          id="disable click"
          src="/click.js"
          defer
          rel="preload"
          as="script"
        />
      </body>
    </html>
  );
}
