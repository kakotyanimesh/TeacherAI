"use client"

import Link from "next/link";
import { useState } from "react";
import { Book, Menu, X  } from "lucide-react";
import Button from "../components/Button";


const navItems = [
  { name: "Home", src: "/" },
  { name: "About", src: "/about" },
  { name: "Pricing", src: "/pricing" },
  { name: "Contact", src: "/contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" text-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            
            <h1 className="text-xl font-bold flex flex-row items-center justify-center">
                <Book size={36} color="#004080" strokeWidth={3} absoluteStrokeWidth />

                <p>TeachAI</p>
            </h1>
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item, key) => (
                <Link
                  key={key}
                  href={item.src}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <Button 
            //   varientstype="primary" 
              title="Get started" 
              Onclick={() => alert("hi")} 
              
            /> */}
            <Button type="primary" title="Get Started" Onclick={() => alert("adads")}/>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex justify-center items-center text-center">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, key) => (
              <Link
                key={key}
                href={item.src}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              {/* <Button 
                
                title="Get started" 
                Onclick={() => alert("hi")} 
              /> */}
              <Button type="primary" title="Get started" Onclick={() => alert("ada")}/>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}