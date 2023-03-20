import { useState, useEffect } from 'react';
import SearchMovie from './SearchMovie';
import OneMovie from './oneMovie/OneMovie';
import Modal from './Modal';

const Main = () => {
    const [moviesFromApi, setMoviesFromApi] = useState([]);
    const [modalOpen, setOpenModal] = useState(false);

    const setResults = (movies) => {
        setMoviesFromApi(movies);
    }

        return (
        <div className='Main'>
            <SearchMovie setResults={setResults}/>
            <OneMovie moviesFromApi={moviesFromApi} />

            <h1>Hey, Click on the modal</h1>
            <button className='openModalBtn' onClick={() => {
                    setOpenModal(true);
                }}
            >
                Open
            </button>
                {/* if openModal is equal to true then render the Modal component  */}
            {modalOpen && <Modal setOpenModal={setOpenModal} />} 

        </div>
    );
}

export default Main
