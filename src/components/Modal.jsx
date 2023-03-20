import React from 'react';

const Modal = ({setOpenModal}) => {

    // const { Title, Year, imdbRating, Plot, Poster, Genre, Country } = openedMovie
    
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className='titleCloseBtn'>
            <button onClick={() => setOpenModal(false)}> X </button>
            </div>

            <div className='title'><h1>Are you cute?</h1>
                </div>
        
            <div className='body'>
                <p>
                    The sexy people unite
                </p>
            </div>
            <div className='footer'>
                <button onClick={() => setOpenModal(false)}>Find other</button>
                <button>Watch it</button>
            </div>
        </div>
        Modal
    </div>
  )
}

export default Modal




// const Modal = ({chosen}) => {
//     console.log(chosen.Title)
//     return (<div className="modal">
//             <h1>{chosen.Title} ({chosen.Year})</h1>
//             <div className="container-one">
//                 <img src={chosen.Poster} alt={chosen.Title}/>
//                 <div className="text">
//                     <p><strong>Plot: </strong>{chosen.Plot}</p>
//                     <p><strong>Genre: </strong>{chosen.Genre}</p>
//                     <p><strong>Actors: </strong>{chosen.Actors}</p>
//                     <p><strong>Writer: </strong>{chosen.Writer}</p>
//                     <p><strong>Runtime: </strong>{chosen.Runtime}</p>
//                     <p><strong>Released: </strong>{chosen.Released}</p>
//                     <p><strong>Production: </strong>{chosen.Production}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Modal;