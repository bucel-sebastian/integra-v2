"use client";

import LoginForm from "@/components/login-password-reset/LoginForm";
import { useState } from "react";

export default function LoginPage() {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginIsLoading, setLoginIsLoading] = useState(false);

  return (
    <>
      <main className="flex h-screen justify-center items-center">
        <div className="mx-auto md:max-w-[500px] w-[100%] bg-backgroundSecondary border border-borderColor rounded-lg p-8 md:p-12 mb-8 max-w-[350px]">
          <h2 className="mb-2 text-4xl font-bold dark:text-white">
            Integra V2
          </h2>
          <h3 className="mb-4 text-2xl dark:text-white">Autentificare</h3>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
