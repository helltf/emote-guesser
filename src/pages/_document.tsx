import Footer from '@/components/footer/footer';
import Navbar from '@/components/nav/navbar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head />
      <body className="h-full">
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
