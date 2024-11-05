"use client";
import Link from 'next/link';
import React from "react";

export default function homepage() {
  return (
    <div>
      <div></div>
      <p className="bold text-xl ml-10 mt-5">En Popüler Kategoriler</p>
      <div className="flex mt-5">
        <div className="rounded-full ml-10 mr-8  h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'>  <img src="/home_image/elbise.png" alt="elbise" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'> <img src="/home_image/bluz.png" alt="bluz" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
          <div><Link href="/logIn" className='text-black decoration-red-200'> <img src="/home_image/kazak.png" alt="kazak" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'> <img src="/home_image/jeans.png" alt="jeans" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'> <img src="/home_image/hırka.png" alt="hırka" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'> <img src="/home_image/pijama.png" alt="pijama" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'> <img src="/home_image/pantolon.png" alt="pantolon" /></Link></div>
        </div>
        <div className="rounded-full mr-8 h-52 w-52 ">
        <div><Link href="/logIn" className='text-black decoration-red-200'>  <img src="/home_image/tümü.png" alt="tümü" /></Link></div>
        </div>
      </div>
    </div>
  );
}
