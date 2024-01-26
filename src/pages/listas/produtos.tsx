import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import { useState } from 'react'
import Produto from '@/components/listas/pagina'

export default function PaginapProdutos() {
    
    const [itens, setitens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto) {
        console.log(produto)
    }

    return (
        <div 
            className={`
            flex flex-col justify-center items-center h-screen
            `}
        > 
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>
   
   )
}