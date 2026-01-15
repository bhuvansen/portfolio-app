import "./globals.css";

export const metadata = {
  title: "Bhuvan | Portfolio",
  description: "Senior Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
