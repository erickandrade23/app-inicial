import ProdutoItem from "@/components/listas/ProdutoItem";
import produtos from "@/constants/produtos";

export default function PaginapProdutos() {
    const produto = produtos[0]

    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
        `}> 
            <ProdutoItem produto={produto} />
        </div>
    )
}