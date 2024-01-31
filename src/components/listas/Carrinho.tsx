import ItemCarrinho from '@/model/ItemCarrinho'
import CarrinhoItem from './CarrinhoItem'
import CarrinhoVazio from './CarrinhoVazio'
import Moeda from '@/utils/Moeda'

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {

    return (
        <div className="flex flex-col border border-white rounded-md overflow-hidden w-4/5">
            <div className="flex justify-between items-center bg-zinc-800 text-3xl p-3">
                Carrinho
            </div>
            <div className='fle
            x gap-5 p-5'>
                {props.itens.map((item, i) => {
                    return <CarrinhoItem key={i} {...item} />
                })}
            </div>
        </div>
    )
}