import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Therapist Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
