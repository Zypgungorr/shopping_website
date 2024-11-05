"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          pwd: password,
        }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setError(error);
        return;
      }

      alert("You are registered! You can log in.");
      router.push("/homepage");
    } catch (error) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div>
      <div className="text-center mt-10">
        <p className="text-2xl">Merhaba,</p>
        <p>
          SHOPPING-SIDE’a giriş yap veya hesap oluştur, indirimleri kaçırma!
        </p>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="p-5 m-5 mt-10 w-4/12 rounded-xl border-solid border-4 border-zinc-200 bg-zinc-100">
          <div className="p-10">
            <h1 className="flex justify-center text-zinc-800 text-3xl mb-6">
              KAYIT OL
            </h1>
            <div className="mb-4">
              <h3 className="text-zinc-800 mb-2">Email:</h3>
              <input
                className="w-full h-12 p-4 bg-zinc-200 rounded-md"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <h3 className="text-zinc-800 mb-2">Password:</h3>
              <input
                className="w-full h-12 p-1 bg-zinc-200 rounded-md"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="mt-3 w-3/5 ml-20 text-black bg-zinc-300 p-2 rounded-md bold"
              onClick={handleSignUp}
            >
              Kayıt Ol
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p className="mt-6 ml-12">
              Do you have an existing account?{" "}
              <a className="hover:text-zinc-500" href="/logIn">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
