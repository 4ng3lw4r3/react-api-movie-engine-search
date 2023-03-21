import React from 'react';


const Modal = ({setOpenModal, chosen}) => {
    
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className='titleCloseBtn'>
                <button onClick={() => setOpenModal(false)}> X </button>
            </div>

            <div class="inner">
                <div className='poster'>
                    <img src={chosen.Poster} alt={chosen.Title}/>
                </div>
                <div class="data">
                    <div className='title'>
                        <h1>{chosen.Title}</h1>
                    </div>
                
                    <div className='body'>
                        <div class="movieinfo">
                            <span>{chosen.Genre}</span> | <span>{chosen.Year}</span> | <span>{chosen.Country}</span> | <span>{chosen.Runtime}</span>
                        </div>
                        <p>{chosen.Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal