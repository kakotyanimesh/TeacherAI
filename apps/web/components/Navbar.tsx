"use client"
import { Button } from '@repo/ui';
import { Book, Key, Menu } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { useState } from 'react';

const myFontTwo = localFont({src : "../public/fonts/jakarta.ttf"})

export default function Navbar() {

    const [menu, setMenu] = useState(false)
    const navLinks = [
        {
            title : "Features",
            link : "/features"
        },
        {
            title : "Pricing",
            link : "/pricing"
        },
        {
            title : "Testimonial",
            link : "/testimonial"
        }
    ]

    return (
        <div className='flex flex-row justify-between mx-20 bg-red my-10 text-2xl'>
            <div className='flex flex-row items-center'>
                <Book size={36} color="#004080" strokeWidth={3} absoluteStrokeWidth />
                <h1 className='text-2xl'>TeachAI</h1>
            </div>
            <div className='hidden md:block'>
            <div className='flex flex-row justify-center items-center text-center gap-10'>
                <div className="flex gap-10">
                {
                    navLinks.map((nav, key) => (
                        <Link href={nav.link} key={key} className={`${myFontTwo.className}`}>
                            {nav.title}
                        </Link>
                    ))
                }
                </div>
                <Button title='signup' Onclick={() => alert("adasd")}/>
            </div>
            </div>
            
            {/* <div className='hidden'>
                <div>
                    <button onClick={() => setMenu(!menu)}>
                        <Menu size={48} color="#205fb1" strokeWidth={0.5} />
                    </button>
                    {
                        menu && (
                            <div className='flex flex-col justify-center items-center'>
                                {
                                    navLinks.map((nav, Key) => (
                                        <Link key={Key} href={nav.link} className={`${myFontTwo.className}`}>
                                            {nav.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div> */}
        </div>
    )
}