import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-5xl font-black mb-10">Comunicação Direta</h1>
            <Avo nome="Mariano" sobrenome="Silva" />
            <Avo nome="Antônio" sobrenome="Miranda" />
        </div>
    )
}  