import { useState, useEffect } from 'react';
import searchMovie from '../services/movieService';
import OneMovie from './oneMovie/OneMovie';

const SearchMovie = ({setResults}) => {
    const [searchWord, setSearchWord] = useState('');
    const [query, setQuery] = useState("")

    //1. set search word to state
    const handleChange = (searchWord) => {
        setSearchWord(searchWord);
    }

    //2. function calling service api
    const getMovies = (searchWord) => {
        searchMovie(searchWord).then(res => {
            setResults(res);
        })
    }
    //3. useEffect watching calling api
    useEffect(() => {
        getMovies(searchWord);
    }, [searchWord])

    return (
        <div>
            <input
            type="text"
            value={searchWord}
            onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
    }

export default SearchMovie