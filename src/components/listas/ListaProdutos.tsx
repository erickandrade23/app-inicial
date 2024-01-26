import Produto from '@/model/Produto'
import ProdutoItem from './ProdutoItem'

interface ListaProdutoProps {
    produtos: Produto []
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutoProps) {
    return (
        <div className='flex flex-wrap gap-3'>
            {props.produtos.map((produto)=>{
                    return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar}/>
            })}
            </div>
    )
}