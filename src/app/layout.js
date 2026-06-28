import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: {
    default: "Tutor Booking Platform",
    template: "%s | Tutor Booking Platform",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className=" flex flex-col min-h-screen">
        <Navbar></Navbar>

        <main className="flex-1">
          {children}
        </main>
        <Toaster position="top-right"
          reverseOrder={false} />
        <Footer></Footer>
      </body>
    </html>
  );
}
