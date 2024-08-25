import { Inter } from "next/font/google";
import "@styles/globals.css";
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Next Jobs",
   description: "Next.js Jobs Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
         <Toaster position="top-center" />
         <Navbar />
         <main>{children}</main>
      </body>
    </html>
  );
}
