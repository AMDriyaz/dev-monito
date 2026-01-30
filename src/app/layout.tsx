import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Using Manrope as Gilroy alternative
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Monito - Dogbet Shop",
    description: "Find your perfect pet companion",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${manrope.variable} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
