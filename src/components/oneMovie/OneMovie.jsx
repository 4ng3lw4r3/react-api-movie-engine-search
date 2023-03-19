import React, { useRef, useState } from 'react'
import styles from './OneMovie.module.css'

const OneMovie = (props) => {

    const items = props.moviesFromApi.Search
    const itemsRef = useRef()

    const getMovie = async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=e4db3ced&i=${id}`);
        const movie = await response.json();
        alert('Title:'+movie.Title+'; Genre:'+ movie.Genre)

        // setChosen (movie);
    }

    return (
        <div className={styles.list} ref={itemsRef}> 
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


    )
}

export default OneMovie


// return (

//     <div> 
//         {
//                 items && items.map(item => (
//                     <div key={item.id}>
//                         <h2>{item.title}</h2>
//                     </div>
//                     ))
//         }

//     </div>
// )
// }


