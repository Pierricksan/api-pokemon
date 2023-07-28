import React, { useState } from 'react';
import SearchBar from '../../components/searchBar';


const Pokemon: React.FC = () => {
    const [searchResults, setSearchResults] = useState<any[]>([]); // Utilisez le type correct pour vos résultats
    const handleSearch = async (query: string) => {
        try {
            // Effectuez le fetch vers votre API avec la query
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            const data = await response.json();
            setSearchResults([data]); // récupération des data dans un tableau
            console.log([data])
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);
            setSearchResults([]); // Réinitialisez les résultats en cas d'erreur
        }
    };

    return (
        <div>
            <h1>Page de recherche</h1>
            <SearchBar onSearch={handleSearch} />
            {
                (searchResults.length > 0) ? (
                    <div>
                        {
                            searchResults.map(results => {
                                return (
                                    <div key={results.id}>
                                        <h2>{results.name}</h2>
                                        <object data={results.sprites.front_default}
                                        width="100"
                                        height="100"/>
                                        <h3>species {results.species.name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <p>résultat not found </p>
                )
            }
        </div>
    );
};

export default Pokemon;




