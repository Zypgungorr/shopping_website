"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false); // will check if user is logged in or not from api

    return (
        <div className="bg-white p-4 shadow-sm shadow-zinc-300">
            <div className="flex justify-between items-center">
                <div className='ml-2'>
                    <div className="ml-2 text-zinc-700 text-2xl italic"><Link href="/homepage" className='text-black decoration-red'> SHOPPING-SIDE</Link></div>
                </div>
                <div className='py-2 w-1/2 bg-slate-200 rounded-lg hidden xl:inline'>
                    <input className='w-full bg-transparent text-black mx-2' type="text" placeholder='Aramak istediğiniz ürünü yazınız...'/>
                </div>
                <div className="flex">
                    <div className="mr-10 text-zinc-700"><Link href="/logIn" className='text-black decoration-red hover:text-zinc-400'> Giriş Yap</Link></div>
                    <div className={loggedIn ? "mr-8 text-zinc-700" : "hidden"}><Link href="/basket" className='text-black decoration-red hover:text-zinc-400'>Sepetim</Link></div>
                </div>
            </div>
        </div>
    );
}
