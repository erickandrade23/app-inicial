import ItemCarrinho from "@/model/ItemCarrinho";


export default function CarrinhoItem(props: ItemCarrinho) {
    return(
        <div className={`
            flex rounded-full bg-blue-500 
        `}>
            {props.produto.nome}
            {props.quantidade}
        </div>
    )
}