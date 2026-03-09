// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Tanushreegroup",
//   description: "Real Estate, Education, Hospitality at Tanushree Group - Your Gateway to Success in Real Estate, Education, and Hospitality in India and Worldwide.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <meta name="google-site-verification" content="iOuRn1ZxbAaTjowhNl58Nph1mgZy7UslHMxwd6mSBV8" />
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanushreegroup",
  description: "Tanushree Group - Real Estate Development Company",
  applicationName: "Tanushreegroup",
  openGraph: {
    title: "Tanushreegroup",
    description: "Tanushree Group - Real Estate Development Company",
    siteName: "Tanushreegroup",
    url: "https://tanushreegroup.com",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tanushreegroup",
    alternateName: "Tanushree Group",
    url: "https://tanushreegroup.com",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
       <meta name="google-site-verification" content="iOuRn1ZxbAaTjowhNl58Nph1mgZy7UslHMxwd6mSBV8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
