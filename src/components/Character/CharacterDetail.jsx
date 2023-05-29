import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";



const CharacterDetail = () => {
  
    const { id } = useParams();
    //console.log(id)
    
    const [character, setCharacter] = useState({})
    //console.log(character)


    const getCharacter = async () => {
        const resp = await axios.get("https://starwars-server.vercel.app/characters/" + id)
        //console.log(resp.data.data.characters)
        setCharacter(resp.data.data.characters)
        

    }

    useEffect(() => {
        getCharacter()
    }, [])

    

    return (
   
        
            <>
 
            <h1>{character.name}</h1>
            <h3>{character.role}</h3>
            <img src={character.image} alt="" />

            <p>Origen: {character.origin}</p>
        
            <p style={{marginLeft:"150px", marginRight:"150px"}}>Descripción: {character.description}</p>
            
        </>
       
  )
}


export default CharacterDetail