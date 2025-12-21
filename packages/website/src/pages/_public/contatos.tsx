import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { FaComments } from "react-icons/fa6";

export const Route = createFileRoute("/_public/contatos")({
    component: RouteComponent,
});

type RequestType =
    | "Dúvida sobre denúncia"
    | "Problema técnico"
    | "Sugestão"
    | "Reclamação"
    | "Outro";

function RouteComponent() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const isOnline = true; // Mock: status online
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        requestType: "" as RequestType | "",
        message: "",
    });

    const requestTypes: RequestType[] = [
        "Dúvida sobre denúncia",
        "Problema técnico",
        "Sugestão",
        "Reclamação",
        "Outro",
    ];

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Adicione sua lógica de envio aqui
        console.log("Formulário enviado:", formData);
        // Reset form
        setFormData({
            fullName: "",
            email: "",
            requestType: "" as RequestType | "",
            message: "",
        });
        alert("Mensagem enviada com sucesso! Retornaremos em breve.");
    };

    return (
        <div className="min-h-[calc(100vh-81px)] mt-[81px] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-[800px] space-y-6">
                {/* Card de Chat ao Vivo */}
                <div className="bg-white dark:bg-neutral-900 rounded-lg border-2 border-black/10 dark:border-white/10 shadow-lg dark:shadow-white/10 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                            <FiMessageCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
                            {isOnline && (
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-neutral-900"></span>
                            )}
                        </div>
                        <h2 className="sm:text-2xl text-lg font-bold">Chat ao Vivo</h2>
                        {isOnline && (
                            <span className="ml-auto flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm text-green-600 dark:text-green-500 font-medium">
                                    Online
                                </span>
                            </span>
                        )}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        Converse diretamente com nossa equipe técnica
                    </p>
                    <button
                        onClick={() => setIsChatOpen(true)}
                        disabled={!isOnline}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
                    >
                        <FiMessageCircle className="w-5 h-5" />
                        Iniciar Conversa
                    </button>
                </div>

                {/* Card de Enviar Dúvida */}
                <div className="bg-white dark:bg-neutral-900 rounded-lg border-2 border-black/10 dark:border-white/10 shadow-lg dark:shadow-white/10 p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Envie sua Dúvida
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        Não está online? Deixe sua mensagem que retornaremos em
                        breve
                    </p>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium mb-2"
                            >
                                Nome completo{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800"
                                placeholder="Seu nome completo"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                E-mail <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800"
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="requestType"
                                className="block text-sm font-medium mb-2"
                            >
                                Tipo de solicitação{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="requestType"
                                name="requestType"
                                value={formData.requestType}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800"
                            >
                                <option value="">
                                    Selecione o tipo de solicitação
                                </option>
                                {requestTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Mensagem <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none bg-white dark:bg-neutral-800"
                                placeholder="Descreva sua dúvida ou solicitação..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal de Chat */}
            {isChatOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-2xl border-2 border-black/10 w-full max-w-md h-[600px] flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <h3 className="font-bold text-lg">
                                    Chat de Atendimento
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 text-xl"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto">
                            <div className="text-center text-neutral-500 dark:text-neutral-400 py-8">
                                <FaComments className="w-12 h-12 mx-auto mb-4" />
                                <p className="font-medium mb-2">
                                    Conectado ao atendente
                                </p>
                                <p className="text-sm">
                                    Digite sua mensagem abaixo para começar
                                </p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Digite sua mensagem..."
                                    className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white dark:bg-neutral-900"
                                />
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:cursor-pointer"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
