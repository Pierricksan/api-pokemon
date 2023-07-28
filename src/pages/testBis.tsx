

import React, {useState, useEffect} from 'react'


export default function TestBis(){
    const [data, setData] = useState(null);
    // const [isLoading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                // setLoading(false)
            })

    }, [data, searchQuery]);
    if(data){
        console.log(data)
    }

const handleInput = (e: any) => {
    e.preventDefault();
    console.log(e.target.value)
    setSearchQuery(e.target.value)
    }

    return(
        <>
            <h1>Bienvenue sur la recherche Pokemon</h1>
            <div>
                <form>
                    <label htmlFor="search">Recherche de pokémon</label>
                    <input
                        type="search"
                        id='search'
                        value={searchQuery}
                        placeholder='Which pokemon are you looking for'
                        onInput={handleInput}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}
