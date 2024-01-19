import If from "@/components/condicional/If"
import {IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { useState } from "react"

interface PerguntaProps {
    texto: string
    resposta :string 
}
export default function Pergunta(props: PerguntaProps) {
    const [aberta, setAberta] = useState<boolean>(false)

    return (
        <div className={`
            border border-zinc-600 rounded-md overflow-hidden
        
        `}>
            <div 
                className="bg-zinc-800 p-5 cursor-pointer select-none flex justify-between"
                onClick={() => setAberta(!aberta)}
            >
                <span>{props.texto}</span>
                {aberta ? <IconChevronDown /> : <IconChevronUp />}
            </div>
            <If teste={aberta}>
                <div className="text-green-500 p-5">{props.resposta}</div>
            </If>
        
        </div>
    )
}