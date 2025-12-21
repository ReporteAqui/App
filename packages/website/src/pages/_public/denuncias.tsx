import { createFileRoute } from "@tanstack/react-router";
import * as Cards from "@components/cards";
import SearchBar from "@components/searchbar";

export const Route = createFileRoute("/_public/denuncias")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div className="w-full min-h-screen px-8 mt-24 flex flex-col items-center justify-start gap-8">
                <section className="w-full flex flex-col items-center justify-center">
                    <SearchBar />
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
