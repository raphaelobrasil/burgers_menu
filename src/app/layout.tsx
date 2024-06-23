import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import Provider from '@/common/providers'


const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ['normal', 'italic'],
  display: 'swap',
 })


export const metadata: Metadata = {
  title: "Burgers",
  description: "Burgers menu",
  robots: "index, follow",
  verification: {
    google: "token google console search",
    other: {
      "msvalidate.01": "token Bing Webmaster Tools"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          { children }
        </Provider>        
      </body>
    </html>
  );
}
