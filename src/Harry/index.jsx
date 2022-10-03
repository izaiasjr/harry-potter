import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './style'




export default function Harry() {
    let Api = 'https://hp-api.herokuapp.com/api/characters'
   
    const [personagem, setPersonagem] = useState([])

useEffect(() =>{
    axios.get(Api).then((response) =>{
        console.log(response.data.slice(0, 25))
        setPersonagem(response.data.slice(0, 25))
    })
} , [Api])
   
    return (
      <S.Container>
            <ul>{personagem.map((item, index) => (
                <li Key={index}>
                    {item.name}
                    <S.Img src={item.image} alt={item.name}/>
            </li>
            ))}</ul>
            
        </S.Container>
    )
}