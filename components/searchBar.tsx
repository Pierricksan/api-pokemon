import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery.toLowerCase());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Rechercher..."
            />
            <button type="submit">Rechercher</button>
        </form>
    );
};

export default SearchBar;