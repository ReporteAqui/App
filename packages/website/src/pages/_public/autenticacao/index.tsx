import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";

export const Route = createFileRoute("/_public/autenticacao/")({
    component: RouteComponent,
});

function RouteComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remeber, setRemember] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Adicione sua lógica de autenticação aqui
        console.log("Login attempt:", { email, password });
    }

    return (
        <div className="min-h-[calc((100vh-81px))] mt-[81px] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl">
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg border-2 border-black/10 dark:border-white/10 shadow-lg dark:shadow-white/10 p-8 md:p-12">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold mb-2">
                            Bem-vindo
                        </h1>
                        <p className="text-sm">
                            Entre com suas credenciais para acessar sua conta
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium mb-2"
                            >
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    onChange={(e) => setRemember(e.target.checked)}
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 accent-green-500 border-neutral-300 rounded"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300"
                                >
                                    Lembrar-me
                                </label>
                            </div>

                            <a
                                href="#"
                                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                            >
                                Esqueceu a senha?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Entrar
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-neutral-600">
                            Não tem uma conta?{" "}
                            <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                            >
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
