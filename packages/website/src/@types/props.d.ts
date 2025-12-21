type NoticesProps = {
    title: string,
    body: string
}

export type NoticesComponentProps = React.PropsWithChildren<NoticesProps>

export interface ReportsProps {
    title: string;
    status: string;
    statusColor?: "red" | "green" | "yellow" | "blue";
    description: string;
    problemType: string;
    location: string;
    timeAgo: string;
    likes?: number;
    dislikes?: number;
    onReact?: () => void;
}

// Searchbar props

export type ProblemType =
    | "Esgoto a céu aberto"
    | "Lixo acumulado"
    | "Vazamento de água"
    | "Bueiro entupido"
    | "Água contaminada"
    | "Falta de saneamento"
    | "Poluição do ar"
    | "Desmatamento"
    | "Outro";

export type Region =
    | "Centro"
    | "Setor Central"
    | "Setor Maracananzinho"
    | "Setor Bela Vista"
    | "Setor Aeroporto"
    | "Setor Universitário"
    | "Setor Oeste"
    | "Setor Sul"
    | "Setor Norte"
    | "Jardim das Américas"
    | "Vila Formosa"
    | "Vila Jaiara"
    | "Vila São João"
    | "Todos";

export interface SearchBarProps {
    onSearch?: (searchTerm: string) => void;
    onRegionsChange?: (regions: Region[]) => void;
    onProblemTypesChange?: (types: ProblemType[]) => void;
    onPageChange?: (page: number) => void;
    onItemsPerPageChange?: (items: number) => void;
    currentPage?: number;
    totalPages?: number;
    itemsPerPage?: number;
}