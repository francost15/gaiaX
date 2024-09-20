import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "GaiaX Academic",
  description: "Software de aprendizaje para la industria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=""
      >
        {children}
      </body>
    </html>
  );
}
