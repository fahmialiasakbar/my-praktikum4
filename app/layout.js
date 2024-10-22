import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2024 My Praktikum4</p>
        </footer>
      </body>
    </html>
  );
}