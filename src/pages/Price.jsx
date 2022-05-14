import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Price(props){

    const apikey = "pk_e096cc9afb814719b0244e6cec8ec85d"

    const { symbol } = useParams()
    const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${apikey}`

    
    const [coin, setCoin] = useState(null)
    const [goGoGo, setGoGoGo] = useState(0)

    
    async function getCoin(){
        const data = await fetch(url).then(res => res.json())
        setCoin(data)
        
    }

    useEffect(()=>{
        getCoin()
        console.log(goGoGo)
        setTimeout(()=>{setGoGoGo(goGoGo+1)}, 10000)
    },[goGoGo])


    const loaded = () =>{
        return(
            <div>
                <h1>
                    {symbol}
                </h1>
                <h2>{coin.price}</h2>
            </div>
        )
    }

    const loading = () =>{
        return <h1>Loading...</h1>
    }

    return coin ? loaded() : loading()

}


