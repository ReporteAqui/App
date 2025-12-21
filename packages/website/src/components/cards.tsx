import "@/styles.css"
import type { NoticesComponentProps, ReportsProps } from "@types"
import { FaThumbsUp, FaThumbsDown, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export function Notices({ title, body, children }: NoticesComponentProps) {
    return (
        <>
            <div className="w-full card-aspect-ratio grid grid-rows-3 items-center justify-center p-2 gap-2 border-2 rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-950 border-black/10 shadow-black/10 dark:border-white/10 dark:shadow-white/10">
                <div className="w-full h-full flex items-center justify-center">
                    {children}
                </div>

                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="font-bold text-center">{title}</h1>
                </div>

                <div className="w-full h-full flex items-start justify-center">
                    <h4 className="text-center">{body}</h4>
                </div>
            </div>
        </>
    )
}

export function Reports({
    title,
    status,
    statusColor = "red",
    description,
    problemType,
    location,
    timeAgo,
    likes = 0,
    dislikes = 0,
    onReact,
}: ReportsProps) {
    const statusColorClasses = {
        red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
        blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    };

    return (
        <div className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-lg border-2 border-black/10 dark:border-white/10 shadow-lg p-6 space-y-4">
            {/* Título e Status */}
            <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-bold flex-1">{title}</h2>
                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${statusColorClasses[statusColor]}`}
                >
                    {status}
                </span>
            </div>

            {/* Descrição */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {description}
            </p>

            {/* Seção Inferior: Tags, Localização, Tempo e Reações */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex flex-wrap items-center gap-4">
                    {/* Tag do Tipo de Problema */}
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-sm font-medium">
                        {problemType}
                    </span>

                    {/* Localização */}
                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{location}</span>
                    </div>

                    {/* Tempo */}
                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <FaClock className="w-4 h-4" />
                        <span>{timeAgo}</span>
                    </div>
                </div>

                {/* Reações */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <FaThumbsUp className="w-4 h-4 text-green-600 dark:text-green-500" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {likes}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaThumbsDown className="w-4 h-4 text-red-600 dark:text-red-500" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {dislikes}
                        </span>
                    </div>
                    <button
                        onClick={onReact}
                        className="px-4 py-1 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                        Reagir
                    </button>
                </div>
            </div>
        </div>
    );
}