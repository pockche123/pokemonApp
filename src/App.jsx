import React, { useState, useEffect } from 'react'
import { PokemonForm, PokemonInfo } from './components'
import './App.css'

const App = () => {

    const [name, setName] = useState('')
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(false)


    const getPokemon = async () => {
        try {
            setPokemonData([])
            setLoading(true)
            const api = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
            const response = await fetch(api)
            const data = await response.json()
            console.log(data)
            setPokemonData(data)
            setName('')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        getPokemon()

    }


    return (
        <div>

            <PokemonForm name={name} setName={setName} handleSubmit={handleSubmit} />
            <h2>Show me your moves: </h2>
            {loading && <p>Loading...</p>}
            {!loading && pokemonData.length === 0 && (<h4>No Pokemon yet. Please submit a Pokemon!</h4>)}
            <PokemonInfo pokemonData={pokemonData} />
        </div>
    )
}

export default App