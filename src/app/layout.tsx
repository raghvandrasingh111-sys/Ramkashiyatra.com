import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us",
  description: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us. We'll plan as per your budget and number of days you have. Contact us.",
  openGraph: {
    title: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us",
    description: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us. We'll plan as per your budget and number of days you have. Contact us.",
    url: "https://varanasiayodhya.com/",
    siteName: "Varanasi Ayodhya",
    images: [
      {
        url: "https://varanasiayodhya.com/wp-content/uploads/image-444.png-1024x633.webp",
        width: 1024,
        height: 633,
        alt: "Varanasi Tour Packages",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
