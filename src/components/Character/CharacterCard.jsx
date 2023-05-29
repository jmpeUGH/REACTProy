

const CharacterCard = ({character}) => {
  return (
    <article>

      <img src={character.image} alt=""/>

      <p>{character.name}</p>

    </article>
  )
}

export default CharacterCard