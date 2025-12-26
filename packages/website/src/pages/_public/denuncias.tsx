import { createFileRoute } from "@tanstack/react-router";
import * as Cards from "@components/cards";
import ReportSearchBar from "@components/reportSearchBar";
import { useState, useMemo, useEffect } from "react";
import type { ProblemType, Region, ReportsProps } from "@types";
import "@/constants";

export const Route = createFileRoute("/_public/denuncias")({
    component: RouteComponent,
});

function RouteComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
    const [selectedProblemTypes, setSelectedProblemTypes] = useState<
        ProblemType[]
    >([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Simulação de reports atraves do JSON
    const allReports = (reports || []) as ReportsProps[];

    // Filtrar reports: primeiro por filtros (regiões e tipos), depois por termo de pesquisa
    const filteredReports = useMemo(
        function () {
            let filtered = [...allReports];

            // Aplicar filtro de regiões (prioridade 1)
            if (selectedRegions.length > 0) {
                filtered = filtered.filter(function (report) {
                    return selectedRegions.includes(report.location as Region);
                });
            }

            // Aplicar filtro de tipos de problema (prioridade 2)
            if (selectedProblemTypes.length > 0) {
                filtered = filtered.filter(function (report) {
                    return selectedProblemTypes.includes(
                        report.problemType as ProblemType
                    );
                });
            }

            // Aplicar pesquisa por termo (prioridade 3)
            if (searchTerm.trim()) {
                const searchLower = searchTerm.toLowerCase().trim();
                filtered = filtered.filter(function (report) {
                    return (
                        report.title.toLowerCase().includes(searchLower) ||
                        report.description.toLowerCase().includes(searchLower)
                    );
                });
            }

            return filtered;
        },
        [allReports, selectedRegions, selectedProblemTypes, searchTerm]
    );

    // Calcular total de páginas baseado nos itens filtrados
    useEffect(
        function () {
            const calculatedPages = Math.max(
                1,
                Math.ceil(filteredReports.length / itemsPerPage)
            );
            setTotalPages(calculatedPages);

            // Ajustar página atual se necessário
            if (currentPage > calculatedPages) {
                setCurrentPage(1);
            }
        },
        [filteredReports.length, itemsPerPage, currentPage]
    );

    // Aplicar paginação
    const paginatedReports = useMemo(
        function () {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return filteredReports.slice(startIndex, endIndex);
        },
        [filteredReports, currentPage, itemsPerPage]
    );

    // Resetar página quando os filtros mudarem
    useEffect(
        function () {
            setCurrentPage(1);
        },
        [selectedRegions, selectedProblemTypes, searchTerm, itemsPerPage]
    );

    function handleReact() {
        // Função para lidar com reações (pode ser implementada depois)
        console.log("Reagir");
    }

    return (
        <>
            <div className="w-full min-h-screen px-8 mt-24 flex flex-col items-center justify-start gap-8">
                <section className="w-full flex flex-col items-center justify-center">
                    <ReportSearchBar
                        onSearch={setSearchTerm}
                        onItemsPerPageChange={setItemsPerPage}
                        onRegionsChange={setSelectedRegions}
                        onProblemTypesChange={setSelectedProblemTypes}
                        onPageChange={setCurrentPage}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                    />
                </section>

                <section className="w-full flex flex-col items-center justify-center gap-4">
                    {paginatedReports.length > 0 ? (
                        paginatedReports.map((report, index) => (
                            <Cards.Reports
                                key={`${report.title}-${index}`}
                                title={report.title}
                                status={report.status}
                                statusColor={report.statusColor}
                                description={report.description}
                                problemType={report.problemType}
                                location={report.location}
                                timeAgo={report.timeAgo}
                                likes={report.likes}
                                dislikes={report.dislikes}
                                onReact={handleReact}
                            />
                        ))
                    ) : (
                        <div className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-lg border-2 border-black/10 dark:border-white/10 shadow-lg p-6 text-center">
                            <p className="text-neutral-600 dark:text-neutral-400">
                                Nenhuma denúncia encontrada com os filtros
                                selecionados.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
