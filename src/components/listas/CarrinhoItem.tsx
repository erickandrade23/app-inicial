import ItemCarrinho from "@/model/ItemCarrinho";


export default function CarrinhoItem(props: ItemCarrinho) {
    return(
        <div className={`
            flex rounded-full bg-blue-500 
        `}>
            <span className="w-7 h-7 rounded-full p-2 bg-blue-700">{props.quantidade}</span>
            {props.produto.nome}
        </div>
    )
}