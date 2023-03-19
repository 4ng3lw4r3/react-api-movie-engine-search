import React from 'react';

const Modal = ({chosen}) => {
    console.log(chosen.Title)
    return (<div className="modal">
            <h1>{chosen.Title} ({chosen.Year})</h1>
            <div className="container-one">
                <img src={chosen.Poster} alt={chosen.Title}/>
                <div className="text">
                    <p><strong>Plot: </strong>{chosen.Plot}</p>
                    <p><strong>Genre: </strong>{chosen.Genre}</p>
                    <p><strong>Actors: </strong>{chosen.Actors}</p>
                    <p><strong>Writer: </strong>{chosen.Writer}</p>
                    <p><strong>Runtime: </strong>{chosen.Runtime}</p>
                    <p><strong>Released: </strong>{chosen.Released}</p>
                    <p><strong>Production: </strong>{chosen.Production}</p>
                </div>
            </div>
        </div>
    )
}
export default Modal;