import { useRef, useState, useEffect } from 'react';
import searchMovie from '../services/movieService';


const SearchMovie = ({setResults}) => {
    const [searchWord, setSearchWord] = useState('');
    const inputRef = useRef();


    //1. set search word to state
    const handleChange = (searchWord) => {

        if (searchWord !== '') {
            setSearchWord(searchWord);
            inputRef.current.value = ""
        } else {
            alert('Please')
        }
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
            // value={searchWord}
            ref={inputRef}
            // onChange={(e) => handleChange(e.target.value)}
            />
            <button
            onClick={() => handleChange(inputRef.current.value)}
            dangerouslySetInnerHTML={{__html: 'Search'}}
            />
        </div>
    )
    }

export default SearchMovie