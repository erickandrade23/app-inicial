import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    

    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta
                indice={0}
                aberta={ativo === 0}
                texto="Com quantos mamões se faz uma mamada?" 
                resposta="The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={1}
                aberta={ativo === 1}
                texto="Se eu chupo uma laranja em 10 minutos quanto tempo levo pra chupar um saco?" 
                resposta="The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={2} 
                aberta={ativo === 2}
                texto="Se os marcianos são de marte, então os da terra são terraplanistas?"
                resposta="The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={3}
                aberta={ativo === 3}
                texto="Se arroz doce é doce, então o arroz normal é salgado?" 
                resposta="The standard Lorem Ipsum passage, used since the 1500s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}