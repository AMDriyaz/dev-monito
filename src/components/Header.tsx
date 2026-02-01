"use client";

import { useState } from "react";

import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Container } from "./Container";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
            <Container className="py-[30px]">
                <div className="flex items-center justify-between relative">

                    {/* Left: Mobile Menu Toggle */}
                    <div className="xl:hidden flex items-center z-20">
                        <button onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-6 h-6 text-[#00171F]" />
                        </button>
                    </div>

                    {/* Center (Mobile) / Left (Desktop): Logo */}
                    <div className="flex items-center gap-12 xl:relative absolute left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 z-20">
                        <Link href="/" className="flex flex-col items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Monito Logo"
                                width={115}
                                height={40}
                                className="object-contain" // ensuring it fits well
                                priority
                            />
                        </Link>

                        <nav className="hidden xl:flex items-center gap-12 font-bold text-base leading-6 tracking-normal text-[#003459]">
                            <Link href="/" className="hover:text-monito-blue/80">Home</Link>
                            <Link href="/category" className="hover:text-monito-blue/80">Category</Link>
                            <Link href="/about" className="hover:text-monito-blue/80">About</Link>
                            <Link href="/contact" className="hover:text-monito-blue/80">Contact</Link>
                        </nav>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3.5 z-20">
                        {/* Mobile Search Icon & Toggle */}
                        <div className="xl:hidden relative">
                            {isSearchOpen ? (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white rounded-full px-4 py-2 w-[200px] border border-gray-100 shadow-md z-30">
                                    <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
                                        autoFocus
                                        onBlur={() => setIsSearchOpen(false)}
                                    />
                                    <X
                                        className="w-4 h-4 text-gray-400 ml-2 shrink-0 cursor-pointer"
                                        onClick={() => setIsSearchOpen(false)}
                                    />
                                </div>
                            ) : (
                                <button onClick={() => setIsSearchOpen(true)}>
                                    <Search className="w-6 h-6 text-[#00171F]" />
                                </button>
                            )}
                        </div>

                        {/* Search Bar (Desktop) */}
                        <div className="hidden xl:flex items-center bg-white rounded-full px-4 py-[12px] w-[280px] h-[44px] border border-gray-100 shadow-sm">
                            <Search className="w-5 h-5 text-gray-400 mr-[12px]" />
                            <input
                                type="text"
                                placeholder="Search something here!"
                                className="bg-transparent border-none outline-none text-sm w-full text-[#99A2A5] font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Join Button */}
                        <button className="hidden xl:block bg-[#003459] w-[203px] h-[44px] text-[#FDFDFD] px-[28px] py-[12px] rounded-full font-bold text-[16px] hover:bg-[#002a48] transition-colors">
                            Join the community
                        </button>

                        {/* Currency Selector */}
                        <div className="hidden xl:flex items-center gap-1 cursor-pointer font-bold text-[#003459] ml-2">
                            {/* Placeholder for VND Flag - using a simple circle or text if no image */}
                            <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-[8px] text-white border border-gray-200 overflow-hidden">
                                <span className="text-yellow-400">★</span> {/* Vietnamese flag approximation */}
                            </div>
                            <span>VND</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Backdrop & Drawer */}
            <>
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 xl:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Drawer */}
                <div className={`fixed top-0 left-0 w-[60%] sm:w-[50%] h-full bg-[#FDF8EB] z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        {/* Header with Close Icon */}
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" className="flex flex-col items-center" onClick={() => setIsMenuOpen(false)}>
                                <Image
                                    src="/images/logo.png"
                                    alt="Monito Logo"
                                    width={90}
                                    height={32}
                                    className="object-contain"
                                />
                            </Link>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2 text-[#00171F]">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex flex-col gap-6 font-bold text-lg text-[#003459]">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-monito-blue/80">Home</Link>
                            <Link href="/category" onClick={() => setIsMenuOpen(false)} className="hover:text-monito-blue/80">Category</Link>
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-monito-blue/80">About</Link>
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-monito-blue/80">Contact</Link>
                        </nav>

                        {/* Mobile Join Button */}
                        <div className="mt-8">
                            <button className="bg-[#003459] text-white px-8 py-3 rounded-full font-bold text-base w-full shadow-lg">
                                Join the community
                            </button>
                        </div>
                    </div>
                </div>
            </>
        </header >
    );
}
