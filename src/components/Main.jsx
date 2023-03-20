import { useState } from 'react';
import SearchMovie from './SearchMovie';
import OneMovie from './oneMovie/OneMovie';

const Main = () => {
    const [moviesFromApi, setMoviesFromApi] = useState([]);

    const setResults = (movies) => {
        setMoviesFromApi(movies);
    }


    return (
        <div className='Main'>
            <SearchMovie setResults={setResults}/>
            <OneMovie moviesFromApi={moviesFromApi} />
        </div>
    );
}

export default Main
