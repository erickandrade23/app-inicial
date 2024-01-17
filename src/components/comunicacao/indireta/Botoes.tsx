interface BotoesProps {
    
}

export default function Botoes (props: BotoesProps) {
    return (
    <div className="flex justify-between pt-2 gap-2">
        <button className="botao flex-1 bg-blue-500 text-white
        font-bold py-2 px-4 rounded;">
            Dec
        </button>
        <button className="botao flex-1 bg-blue-500 text-white
        font-bold py-2 px-4 rounded;">
            Inc 
        </button>
    </div>
    )
}