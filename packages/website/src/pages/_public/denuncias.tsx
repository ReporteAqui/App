import { createFileRoute } from "@tanstack/react-router";
import * as Cards from "@components/cards";
import ReportSearchBar from "@components/reportSearchBar";
import { useState } from "react";
import type { ProblemType, Region } from "@types";

export const Route = createFileRoute("/_public/denuncias")({
    component: RouteComponent,
});

function RouteComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
    const [selectedProblemTypes, setSelectedProblemTypes] = useState<
        ProblemType[]
    >([]);
    const [totalPages, setTotalPages] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

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
                    <Cards.Reports
                        title="Denuncia"
                        description="Demonstração de denuncia"
                        location="Anápolis"
                        problemType=""
                        status="Pendente"
                        timeAgo="há 1 hora"
                    />
                </section>
            </div>
        </>
    );
}
