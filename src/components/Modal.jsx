import React from 'react'
import OneMovie from './oneMovie/OneMovie'
import SearchMovie from './SearchMovie'

const Modal = ({moviesFromApi, goBack}) => {
    console.log(moviesFromApi.Title)
    return (<div className="Modal">
            <h1>{moviesFromApi.Title} ({moviesFromApi.Year})</h1>
            <div className="modalBox">
                <img src={moviesFromApi.Poster} alt={moviesFromApi.Title}/>
                <div className="text">
                    <p><strong>Plot: </strong>{moviesFromApi.Plot}</p>
                    <p><strong>Genre: </strong>{moviesFromApi.Genre}</p>
                    <p><strong>Actors: </strong>{moviesFromApi.Actors}</p>
                    <p><strong>Writer: </strong>{moviesFromApi.Writer}</p>
                    <p><strong>Runtime: </strong>{moviesFromApi.Runtime}</p>
                    <p><strong>Released: </strong>{moviesFromApi.Released}</p>
                    <p><strong>Production: </strong>{moviesFromApi.Production}</p>
                </div>
            </div>
            <button className="button" onClick={goBack}>BACK</button>
        </div>
    )
}
export default Modal