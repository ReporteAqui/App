import type { ProblemType, Region, SearchBarReportsProps } from "@types";
import { useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const problemTypes: ProblemType[] = [
    "Esgoto a céu aberto",
    "Lixo acumulado",
    "Vazamento de água",
    "Bueiro entupido",
    "Água contaminada",
    "Falta de saneamento",
    "Poluição do ar",
    "Desmatamento",
    "Outro",
];

const regions: Region[] = [
    "Centro",
    "Setor Central",
    "Setor Maracananzinho",
    "Setor Bela Vista",
    "Setor Aeroporto",
    "Setor Universitário",
    "Setor Oeste",
    "Setor Sul",
    "Setor Norte",
    "Jardim das Américas",
    "Vila Formosa",
    "Vila Jaiara",
    "Vila São João",
];

export default function ReportSearchBar({
    onSearch,
    onRegionsChange,
    onProblemTypesChange,
    onPageChange,
    onItemsPerPageChange,
    currentPage = 1,
    totalPages = 1,
    itemsPerPage = 10,
}: SearchBarReportsProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
    const [selectedProblemTypes, setSelectedProblemTypes] = useState<
        ProblemType[]
    >([]);
    const [showRegionDropdown, setShowRegionDropdown] = useState(false);
    const [showProblemTypeDropdown, setShowProblemTypeDropdown] = useState(false);

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch?.(value);
    };

    function toggleRegion(region: Region) {
        const newRegions = selectedRegions.includes(region)
            ? selectedRegions.filter((r) => r !== region)
            : [...selectedRegions, region];
        setSelectedRegions(newRegions);
        onRegionsChange?.(newRegions);
    };

    function toggleProblemType(type: ProblemType) {
        const newTypes = selectedProblemTypes.includes(type)
            ? selectedProblemTypes.filter((t) => t !== type)
            : [...selectedProblemTypes, type];
        setSelectedProblemTypes(newTypes);
        onProblemTypesChange?.(newTypes);
    };

    function handlePageChange(page: number) {
        if (page >= 1 && page <= totalPages) {
            onPageChange?.(page);
        }
    };

    function handleItemsPerPageChange (e: React.ChangeEvent<HTMLSelectElement>) {
        const value = parseInt(e.target.value);
        onItemsPerPageChange?.(value);
    };

    function getDisplayText(items: string[], placeholder: string, maxDisplay: number = 2) {
        if (items.length === 0) return placeholder;
        if (items.length <= maxDisplay)
            return items.join(", ");
        return `${items.slice(0, maxDisplay).join(", ")} +${items.length - maxDisplay}`;
    };

    return (
        <div className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-lg border-2 border-black/10 dark:border-white/10 shadow-lg dark:shadow-white/10 p-6 space-y-6">
            {/* Título */}
            <h2 className="text-2xl font-bold text-center">
                Filtros e Pesquisa
            </h2>

            {/* Campo de Busca */}
            <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Pesquisar denúncias..."
                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-neutral-50 dark:bg-neutral-800"
                />
            </div>

            {/* Dropdowns de Filtro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Dropdown de Região */}
                <div className="relative">
                    <label className="block text-sm font-medium mb-2">
                        Região
                    </label>
                    <button
                        type="button"
                        onClick={() => {
                            setShowRegionDropdown(!showRegionDropdown);
                            setShowProblemTypeDropdown(false);
                        }}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-neutral-50 dark:bg-neutral-800 text-left flex items-center justify-between"
                    >
                        <span className="text-neutral-700 dark:text-neutral-300">
                            {getDisplayText(
                                selectedRegions,
                                "Selecione as regiões"
                            )}
                        </span>
                        <svg
                            className={`w-5 h-5 text-neutral-400 transition-transform ${
                                showRegionDropdown ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {showRegionDropdown && (
                        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {regions.map((region) => (
                                <label
                                    key={region}
                                    className="flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedRegions.includes(
                                            region
                                        )}
                                        onChange={() => toggleRegion(region)}
                                        className="mr-3 w-4 h-4 text-green-600 focus:ring-green-500 border-neutral-300 rounded"
                                    />
                                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                        {region}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dropdown de Tipo de Problema */}
                <div className="relative">
                    <label className="block text-sm font-medium mb-2">
                        Tipo de Problema
                    </label>
                    <button
                        type="button"
                        onClick={() => {
                            setShowProblemTypeDropdown(
                                !showProblemTypeDropdown
                            );
                            setShowRegionDropdown(false);
                        }}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-neutral-50 dark:bg-neutral-800 text-left flex items-center justify-between"
                    >
                        <span className="text-neutral-700 dark:text-neutral-300">
                            {getDisplayText(
                                selectedProblemTypes,
                                "Selecione os tipos"
                            )}
                        </span>
                        <svg
                            className={`w-5 h-5 text-neutral-400 transition-transform ${
                                showProblemTypeDropdown ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {showProblemTypeDropdown && (
                        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {problemTypes.map((type) => (
                                <label
                                    key={type}
                                    className="flex items-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedProblemTypes.includes(
                                            type
                                        )}
                                        onChange={() => toggleProblemType(type)}
                                        className="mr-3 w-4 h-4 text-green-600 focus:ring-green-500 border-neutral-300 rounded"
                                    />
                                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Controles de Paginação */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Mostrar:
                    </span>
                    <select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-neutral-50 dark:bg-neutral-800 text-sm hover:cursor-pointer"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        por página
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Página anterior"
                    >
                        <FaChevronLeft className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                            (page) =>
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 && page <= currentPage + 1)
                        )
                        .map((page, index, array) => (
                            <div key={page} className="flex items-center gap-2">
                                {index > 0 && array[index - 1] !== page - 1 && (
                                    <span className="px-2 text-neutral-400">
                                        ...
                                    </span>
                                )}
                                <button
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 border rounded-lg hover:cursor-pointer ${
                                        currentPage === page
                                            ? "bg-green-600 text-white border-green-600"
                                            : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                    }`}
                                >
                                    {page}
                                </button>
                            </div>
                        ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
                        aria-label="Próxima página"
                    >
                        <FaChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

