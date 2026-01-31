"use client";

import Link from "next/link";

import { Container } from "./Container";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="lg:pt-[80px] pt-[40px] pb-[40px] rounded-t-[40px]"
            style={{ background: "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)" }}
        >
            <Container>
                {/* Newsletter Banner */}
                <div className="bg-[#003459] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-[20px] mb-10">
                    <h2 className="text-white text-2xl md:text-2xl font-bold leading-tight max-w-md">
                        Register Now So You Don&apos;t Miss Our Programs
                    </h2>

                    <div className="bg-white rounded-xl p-3 flex flex-col sm:flex-row w-full gap-2 md:gap-4 items-center">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full px-4 py-2 bg-transparent outline-none border border-[#99A2A5] rounded-[8px] text-gray-700 placeholder:text-gray-400"
                        />
                        <button className="w-full sm:w-auto bg-[#003459] text-white px-8 py-3 rounded-[8px] font-medium text-sm whitespace-nowrap hover:bg-[#002a48] transition-colors">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* Links and Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#CCD1D2] pb-10 mb-8 gap-8">
                    <nav className="flex items-center gap-8 md:gap-12 font-medium text-[#00171F]">
                        <Link href="/" className="hover:text-monito-blue/80">Home</Link>
                        <Link href="/category" className="hover:text-monito-blue/80">Category</Link>
                        <Link href="/about" className="hover:text-monito-blue/80">About</Link>
                        <Link href="/contact" className="hover:text-monito-blue/80">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-8">
                        {/* Facebook */}
                        <a href="#" className="text-[#00171F] hover:opacity-80">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.71 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16L15.5 15H13V21.95C17.91 21.49 22 17.18 22 12Z" fill="currentColor" />
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="#" className="text-[#00171F] hover:opacity-80">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.46 6.00004C21.69 6.35004 20.86 6.58004 20 6.69004C20.88 6.16004 21.56 5.32004 21.88 4.31004C21.05 4.81004 20.13 5.16004 19.16 5.36004C18.37 4.50004 17.26 4.00004 16 4.00004C13.65 4.00004 11.73 5.92004 11.73 8.29004C11.73 8.63004 11.77 8.96004 11.84 9.27004C8.28004 9.09004 5.11004 7.38004 3.00004 4.79004C2.63004 5.42004 2.42004 6.16004 2.42004 6.94004C2.42004 8.43004 3.17004 9.75004 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.46004 14.34 5.08004 14.39 4.69004 14.39C4.42004 14.39 4.15004 14.36 3.89004 14.31C4.43004 16.01 6.01004 17.26 7.87004 17.29C6.43004 18.42 4.61004 19.1 2.62004 19.1C2.27004 19.1 1.93004 19.08 1.60004 19.04C3.47004 20.24 5.69004 20.95 8.08004 20.95C15.86 20.95 20.12 14.51 20.12 8.92004C20.12 8.74004 20.11 8.56004 20.1 8.38004C20.94 7.76004 21.78 6.94004 22.46 6.00004Z" fill="currentColor" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="text-[#00171F] hover:opacity-80">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.28 2 8.94 2.01 7.87 2.06C4.1 2.23 2.22 4.11 2.06 7.87C2.01 8.94 2 9.28 2 12C2 14.72 2.01 15.06 2.06 16.13C2.23 19.89 4.11 21.78 7.87 21.94C8.94 21.99 9.28 22 12 22C14.72 22 15.06 21.99 16.13 21.94C19.89 21.77 21.77 19.89 21.94 16.13C21.99 15.06 22 14.72 22 12C22 9.28 21.99 8.94 21.94 7.87C21.77 4.11 19.89 2.23 16.13 2.06C15.06 2.01 14.72 2 12 2ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM18.5 7C18.5 7.83 17.83 8.5 17 8.5C16.17 8.5 15.5 7.83 15.5 7C15.5 6.17 16.17 5.5 17 5.5C17.83 5.5 18.5 6.17 18.5 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="currentColor" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="text-[#00171F] hover:opacity-80">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5601 7.20006C21.5601 7.20006 21.3501 5.72006 20.7001 5.08006C19.8801 4.22006 18.9601 4.22006 18.5501 4.17006C15.6501 3.96006 12.0101 3.96006 12.0101 3.96006C12.0101 3.96006 8.35005 3.96006 5.46005 4.17006C5.05005 4.22006 4.14005 4.22006 3.32005 5.08006C2.67005 5.72006 2.45005 7.20006 2.45005 7.20006C2.45005 7.20006 2.23005 8.94006 2.23005 10.6801V13.3201C2.23005 15.0601 2.45005 16.8001 2.45005 16.8001C2.45005 16.8001 2.67005 18.2801 3.32005 18.9201C4.14005 19.7801 5.21005 19.7401 5.67005 19.8301C7.30005 19.9901 12.0001 20.0001 12.0001 20.0001C12.0001 20.0001 15.6501 19.9901 18.5401 19.7801C18.9601 19.7301 19.8701 19.7301 20.6901 18.8701C21.3401 18.2301 21.5601 16.7501 21.5601 16.7501C21.5601 16.7501 21.7801 15.0101 21.7801 13.2701V10.6301C21.7801 8.89006 21.5601 7.20006 21.5601 7.20006ZM9.99005 14.1501V9.16006L14.3901 11.6601L9.99005 14.1501Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© 2022 Monito. All rights reserved.</p>

                    <Link href="/" className="flex flex-col items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Monito Logo"
                            width={115}
                            height={40}
                            className="object-contain"
                        />
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link href="/terms" className="hover:text-monito-blue">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-monito-blue">Privacy Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
