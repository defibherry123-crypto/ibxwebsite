import Image from "next/image";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

// Import your flag images
import nigeriaFlag from "../../public/images/flag.png";
import worldFlag from "../../public/images/world.png";
import ivoryCoastFlag from "../../public/images/ivory-coast.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-16">
            <div className="w-full max-w-[1441px] mx-auto">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-8 md:mb-12">

                    {/* Left Section - Flags and Tagline */}
                    <div className="flex flex-col gap-6">
                        {/* Flags */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                <Image src={nigeriaFlag} alt="Nigeria" fill className="object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                <Image src={worldFlag} alt="Ghana" fill className="object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                <Image src={nigeriaFlag} alt="Cameroon" fill className="object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                <Image src={worldFlag} alt="Senegal" fill className="object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                <Image src={ivoryCoastFlag} alt="Ivory Coast" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Tagline */}
                        <div className="max-w-md">
                            <h3 className="font-display text-[18px] md:text-[20px] font-bold leading-[26px] md:leading-[28px] mb-4">
                                Experience the next wave of innovation.<br />
                                Secure your place among the leaders.
                            </h3>

                            {/* Learn More Button */}
                            <button className="border border-white text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className="flex gap-12 md:gap-16">
                        <div>
                            <a href="#" className="font-sans text-[14px] md:text-[16px] font-normal hover:text-orange-500 transition">
                                Home
                            </a>
                        </div>
                        <div>
                            <a href="#" className="font-sans text-[14px] md:text-[16px] font-normal hover:text-orange-500 transition">
                                About Us
                            </a>
                        </div>
                        <div>
                            <a href="#" className="font-sans text-[14px] md:text-[16px] font-normal hover:text-orange-500 transition">
                                IBX Tour
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright and Social Icons */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 pt-8 border-t border-white/10">

                    {/* Copyright */}
                    <p className="font-sans text-[12px] md:text-[14px] font-normal text-gray-400">
                        © 2077 Untitled UI. All rights reserved.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        <a href="https://x.com/IbomBlockchain?t=ByiII5E8klmxqcUVNHuS_A&s=09" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="Twitter" target="_blank"
                            rel="noopener noreferrer">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="LinkedIn" target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.facebook.com/share/16rxXKqb8m/" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="Facebook" target="_blank"
                            rel="noopener noreferrer">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.tiktok.com/@ibomblockchainexperience?_r=1&_t=ZS-912tgD2HocW" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="TikTok" target="_blank"
                            rel="noopener noreferrer">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="GitHub" target="_blank"
                            rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="Medium" target="_blank"
                            rel="noopener noreferrer">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center hover:text-orange-500 transition" aria-label="Dribbble" target="_blank"
                            rel="noopener noreferrer">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.5 9.5c-.19.04-2.08.42-4.19.19.88-2.28 1.23-4.13 1.3-4.52 1.89 1.43 3.24 3.62 2.89 6.33zM14.5 4c-.09.44-.5 2.35-1.42 4.66C10.95 7.76 8.9 6.54 8.7 6.4c2.07-1.57 4.73-1.86 5.8-.4zM6.5 7.91c.24.16 2.46 1.63 4.65 2.17-1.48 3.84-2.1 5.6-2.25 5.98-2.57-1.73-4.21-4.64-2.4-8.15zm5.5 9.53c.27-.45.78-2.31 2.37-6.32.04.01.08.03.12.04 3.07 1.07 4.34 3.21 4.48 3.54-1.34 1.18-3.08 1.9-5 1.9-.66 0-1.3-.07-1.97-.16z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}