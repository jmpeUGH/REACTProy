import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard"


const CharacterList = () => {

  const [characters, setCharacters] = useState([]);

  console.log(characters)

  const getCharacters = async () => {
    const resp = await fetch("https://starwars-server.vercel.app/characters")
    const respJson = await resp.json();

    //console.log(respJson);
    setCharacters(respJson.data.characters)
    //console.log(respJson.data.characters)
  }

  useEffect(() => {

    getCharacters()

  }, [])

  const renderCharacterList = ()=>{

    return characters.map((character)=>
    <li key={character._id}>

      <Link to={"/personaje/" + character._id}>

        <CharacterCard character={character}/>

      </Link>

    </li>
    )
  }

  return(
    <ul>
      {renderCharacterList()}
    </ul>

  )

}


export default CharacterList