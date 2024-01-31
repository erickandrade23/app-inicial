import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";

interface CarrinhoProps {
    itens: ItemCarrinho
}

export default function Carrinho(props: CarrinhoProps) {
    return (
        <div>
            {props.itens((item, i) => {
                return <CarrinhoItem key={i} {...item} />
            })}
        </div>
    )
}