import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListasbasicas() {
    const times =[        
        'Fluminense',
        'Botafogo',
        'Fortaleza',
        'Palmeiras',
        'Vasco',
        'Internacional',
        'Bragantino',
        'Flamengo',
        'São Paulo',
        'Goiás'
    ]

    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
        `}> 
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={50} stroke={1} className="text-blue-700" />
                Tabela Serie A 
            </h1>
            <TabelaSerieA times={times}/>
           
        </div>
    )
}