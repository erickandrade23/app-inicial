interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    
    // transformar uma string -> <li>
    //const itens: any[] = []
    //for(let i = 0; i < props.times.length; i++) {
    //    console.log(props.times[i])
    //    itens.push((
    //        <li key={props.times[i]} className="texte-xl list-decimal">
    //            {props.times[i]}
    //        </li>
    //    )
    //}

    // transformar uma string -> <li>
    const itens2 = props.times.map((time, i) => {
        return (
            <li key={time} className={`
            text-xl list-decimal ${i % 2 === 0 ? 
                'text-blue-500' : 'text-yellow-500'}
            `}
            >    
                {time}
            </li>
        )
    })
        
        

    return (
        <ol>
            {props.times.map((time, i) => {
                return (
                    <li 
                        key={time} 
                        className={`text-3xl list-decimal ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}`}
                    >    
                        {time}
                    </li>
                )   
            })}
        </ol>
    )
}