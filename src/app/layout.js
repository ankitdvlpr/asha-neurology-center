import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Dr. Avinash Singh | Best Neurologist in Varanasi | Asha Neurology Center",
  description: "Dr. Avinash Singh at Asha Neurology Center offers expert care for Brain, Nerve, Spine, Headache, Epilepsy, and Stroke in Varanasi. Book your appointment today.",
  keywords: "Neurologist in Varanasi, Neurology Clinic in Varanasi, Best Neurologist Near Me, Migraine Treatment in Varanasi, Epilepsy Doctor in Varanasi, Stroke Specialist in Varanasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
