import { useState, useEffect } from 'react';
import searchMovie from '../services/movieService';
import OneMovie from './oneMovie/OneMovie';

const SearchMovie = ({setResults}) => {
    const [searchWorld, setSearchWord] = useState('');

    //1. set search word to state
    const handleChange = (searchWord) => {
        setSearchWord(searchWord);
    }

    //2. function calling service api
    const getMovies = (searchWorld) => {
        searchMovie(searchWorld).then(res => {
            setResults(res);
        })
    }
    //3. useEffect watching calling api
    useEffect(() => {
        getMovies(searchWorld);
    }, [searchWorld])

    return (
        <div>
            <input
            type="text"
            value={searchWorld}
            onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
    }



    



export default SearchMovie