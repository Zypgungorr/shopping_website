"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/log-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pwd: password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Giriş başarısız.");
        return;
      }

      const { token, expiresIn } = data;
      if (token && expiresIn) {
        const expireAt = Date.now() + expiresIn * 1000;
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpireTime", expireAt.toString());

        router.push("/homepage");
      } else {
        setError("Token alınamadı, lütfen tekrar deneyin.");
      }
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div>
      <div className="text-center mt-10 ">
        <p className="text-2xl">Merhaba,</p>
        <p>
          SHOPPING-SIDE’a giriş yap veya hesap oluştur, indirimleri kaçırma!
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="p-5 m-5 mt-10 w-4/12 rounded-xl border-solid border-4 border-zinc-200 bg-zinc-100">
          <div className="p-10">
            <h1 className="flex justify-center text-zinc-800 text-3xl mb-6">
              GİRİŞ YAP
            </h1>
            <div className="mb-4">
              <h3 className="text-zinc-700 mb-2">Email:</h3>
              <input
                className="w-full h-12 p-4 bg-zinc-200 rounded-md"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <h3 className="text-zinc-700 mb-2">Password:</h3>
              <input
                className="w-full h-12 p-4 bg-zinc-200 rounded-md"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="mt-3 w-3/5 ml-20 text-black bg-zinc-300 p-2 rounded-md bold"
              onClick={handleLogin}
            >
              Giriş Yap
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p className="mt-6 ml-16">
              Don't have an account yet?{" "}
              <a className="hover:text-zinc-500" href="/signUp">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
