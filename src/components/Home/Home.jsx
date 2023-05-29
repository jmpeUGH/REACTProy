//Como me interesa que el display de productos se vea en el inicio, debo importar ProductList aquí en vez de en la App

import CharacterList from "../Character/CharacterList";


function Home() {
    return <>
        <h1>Personajes de StarWars</h1>
        <p>Debes estar logueado para poder ver las imágenes y acceder a los personajes</p>
        <CharacterList/>
    </>

}

export default Home;