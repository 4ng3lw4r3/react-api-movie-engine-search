import React, { useState } from 'react'
import styles from './OneMovie.module.css'
import Modal from '../Modal';


const OneMovie = (props) => {

    const items = props.moviesFromApi.Search
    const [modalOpen, setOpenModal] = useState(false);
    const [chosen, setChosen] = useState([]);



    const getMovie = async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=e4db3ced&i=${id}`);
        const movie = await response.json()
        setOpenModal(true);
        setMovie(movie)
    }

    const setMovie = (movie) => {
        setChosen(movie)
    }

    return (
        <div className={styles.container}>
            <div className={styles.list}> 
                {
                    items?items.map(item => {
                        return(
                            <div key={item.id} className={styles.oneMovie}>
                                <h2 className={styles.glitchXL}>{item.Type}</h2>
                                <h2 className={styles.glitchXXL}>{item.Title}</h2>
                                <img src={item.Poster} alt={item.title} className={styles.mainImg}></img>
                                <h2 className={styles.glitchXL}>{item.Year}</h2>
                                <button className="moreBtn" onClick={() => getMovie(item.imdbID)}>MORE</button>

                            </div>
                        )
                    }):""
                }

            </div>

            {modalOpen && <Modal setOpenModal={setOpenModal} chosen={chosen} />} 

        </div>


    )
}

export default OneMovie