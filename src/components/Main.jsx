import { useState, useEffect } from 'react';
import SearchMovie from './SearchMovie';
import OneMovie from './oneMovie/OneMovie';
import movieService from '../services/movieService';

const Main = () => {
    const [moviesFromApi, setMoviesFromApi] = useState([]);

    // const getMovies = () => {
    //     movieService().then((res) => {
    //         setMoviesFromApi(res);
    //     })
    // }

    // useEffect(() => {
    //     getMovies();
    // }, []);

    // console.log(movies);


    const setResults = (movies) => {
        setMoviesFromApi(movies);
    }
    console.log(moviesFromApi);
    return (
        <div>
            <SearchMovie setResults={setResults}/>
            <OneMovie moviesFromApi={moviesFromApi}/>
        </div>
    )
}

export default Main
