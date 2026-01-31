import "./globals.css";
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "Bhuvan | Portfolio",
  description: "Senior Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-slate-950 text-white ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
