import Produto from "@/model/Produto"; 
import { IconShoppingCart } from "@tabler/icons-react";
import Image from 'next/image'

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div 
            className={`
                flex flex-col rounded-md bg-green-100
                border border-zinc-500 
                p-1
            `}
        >
            <Image 
                src={props.produto.imagem} 
                width={300} height={200} 
                alt="Imagem do Produto" 
                className='rounded-md '
            />
            <div className='flex flex-col p-3 gap-3'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl text-black font-black'>{produto.nome}</div>
                    <div className='text-red-500 font-bold'>R$ {produto.preco}</div>
                </div>
                <div>
                    <div className='text-black'>{produto.descricao}</div>
                </div>
                <div>
                    <button className={`botao text-black bg-green-300 
                    rounded-md border border-black
                    flex w-full justify-center gap-2 
                    onClick={() => props.comprar(produto)}
                    `}>
                        <IconShoppingCart /> Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}
