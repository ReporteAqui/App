import "@/styles.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaLeaf, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { FiTrendingUp, FiMessageCircle } from "react-icons/fi";
import * as Cards from "@/components/cards";
import { FaWrench, FaWater, FaTrash, FaBuilding } from "react-icons/fa";

export const Route = createFileRoute("/_public/")({
    component: App,
});

// Dados mockados dos comunicados recentes
const recentNotices = [
    {
        id: 1,
        title: "Esgoto Resolvido - Rua das Flores",
        body: "Problema de esgoto a céu aberto foi resolvido com sucesso na Rua das Flores, Centro.",
        icon: <FaWater className="w-12 h-12 text-blue-500" />,
    },
    {
        id: 2,
        title: "Lixo Coletado - Parque Ipiranga",
        body: "Acúmulo de lixo no Parque Ipiranga foi removido pela equipe de limpeza.",
        icon: <FaTrash className="w-12 h-12 text-green-500" />,
    },
    {
        id: 3,
        title: "Vazamento Corrigido - Av. Brasil",
        body: "Vazamento de água na Avenida Brasil foi reparado pela concessionária.",
        icon: <FaWater className="w-12 h-12 text-cyan-500" />,
    },
    {
        id: 4,
        title: "Bueiro Desentupido - Rua Goiás",
        body: "Bueiro na Rua Goiás foi desentupido e está funcionando normalmente.",
        icon: <FaWrench className="w-12 h-12 text-orange-500" />,
    },
];

function App() {
    const problemsResolved = 1247; // Contador de problemas resolvidos

    return (
        <>
            {/* Seção de Boas-Vindas */}
            <section className="min-h-[calc(80vh-81px)] mt-[81px] flex items-center justify-center px-8 py-12 bg-linear-to-b from-green-100 to-white dark:from-green-300/15 dark:to-neutral-950">
                <div className="w-full max-w-3xl text-center">
                    <div className="mb-6 flex justify-center">
                        <FaLeaf className="w-16 h-16 text-green-600 dark:text-green-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bem-vindo ao Reporte Aqui
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
                        Sua plataforma colaborativa para reportar problemas de
                        saneamento básico e meio ambiente em Anápolis. Juntos,
                        podemos construir uma cidade mais limpa e sustentável.
                    </p>
                    <p className="text-base text-neutral-500 dark:text-neutral-400">
                        Reporte problemas, acompanhe soluções e faça parte da
                        transformação da nossa cidade.
                    </p>
                </div>
            </section>

            {/* Seção de Acesso Rápido */}
            <section className="py-12 px-8">
                <div className="max-w-3xl mx-auto p-6 shadow-lg shadow-black/10 dark:shadow-white/10 rounded-2xl border-2 border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-950">
                    <h2 className="text-3xl font-bold text-center mb-8">
                      Faça parte da mudança!
                    </h2>
                    <h4 className="text-center mb-8 text-neutral-700 dark:text-neutral-300">
                      Reporte problemas de saneamento ou ambiental e ajude a construir uma Anápolis melhor para todos.
                    </h4>
                    <div className="flex sm:flex-row flex-col gap-6 items-center justify-center">
                        <Link
                            to="/reportar"
                            className="w-52 flex items-center justify-center p-3 gap-2 bg-red-500 hover:bg-red-600 rounded-lg"
                        >
                            <FaExclamationTriangle className="fill-white stroke-white"/>
                            <h3 className="font-bold text-white">
                                Fazer Denúncia
                            </h3>
                        </Link>

                        <Link
                            to="/contatos"
                            className="w-52 flex items-center justify-center p-3 gap-2 hover:cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-lg"
                        >
                            <FiMessageCircle className="stroke-white fill-white" />
                            <h3 className="font-bold text-white">
                                Contatos
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Seção de Comunicados Recentes */}
            <section className="py-12 px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex sm:flex-row flex-col items-center justify-between gap-y-4 mb-8">
                        <h2 className="text-3xl font-bold">
                            Comunicados Recentes
                        </h2>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
                            <FaCheckCircle className="w-6 h-6" />
                            <span className="text-lg font-semibold">
                                {problemsResolved.toLocaleString()} problemas
                                resolvidos
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        {recentNotices.map((notice) => (
                            <Link
                                key={notice.id}
                                to="/"
                                className="block hover:scale-105"
                            >
                                <Cards.Notices
                                    title={notice.title}
                                    body={notice.body}
                                >
                                    {notice.icon}
                                </Cards.Notices>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            Ver Mais
                            <FiTrendingUp />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Seção Promovendo Governo/Político */}
            <section className="py-12 px-4">
                <div className="max-w-5xl p-4 mx-auto text-center rounded-2xl shadow-lg border-2 bg-neutral-100 dark:bg-neutral-950 border-black/10 dark:border-white/10 dark:shadow-white/15">
                    <div className="mb-6 flex justify-center">
                        <FaBuilding className="w-16 h-16 text-green-600 dark:text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                        Parceria com a Prefeitura de Anápolis
                    </h2>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                        Esta plataforma é resultado de uma parceria entre a
                        sociedade civil e a Prefeitura Municipal de Anápolis.
                        Juntos, trabalhamos para melhorar a qualidade de vida
                        dos cidadãos através do saneamento básico e preservação
                        do meio ambiente.
                    </p>
                    <p className="text-base text-neutral-600 dark:text-neutral-400">
                        O governo municipal está comprometido em resolver os
                        problemas reportados e tornar Anápolis uma cidade mais
                        sustentável e limpa para todos.
                    </p>
                </div>
            </section>

            {/* Seção Promovendo Prestadora de Serviço */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto text-center p-4 rounded-2xl shadow-lg border-2 bg-neutral-100 dark:bg-neutral-950 border-black/10 dark:border-white/10 dark:shadow-white/15">
                    <div className="mb-6 flex justify-center">
                        <FaWater className="w-16 h-16 text-cyan-600 dark:text-cyan-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                        Nossa Parceira de Saneamento
                    </h2>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                        Trabalhamos em conjunto com a prestadora de serviços de
                        saneamento de Anápolis para garantir respostas rápidas e
                        eficientes aos problemas reportados.
                    </p>
                    <p className="text-base text-neutral-600 dark:text-neutral-400">
                        A prestadora está comprometida em atender todas as
                        denúncias relacionadas a água, esgoto e saneamento
                        básico, priorizando a qualidade dos serviços prestados à
                        população.
                    </p>
                </div>
            </section>
        </>
    );
}
