import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ['vietnamese'], weight: '600' });


export const metadata = {
  title: "Ganesh Bochare Porfilio ",
  description: "Ganesh bochare profile",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}
