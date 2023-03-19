import React, { useRef } from 'react'
import Modal from '../Modal'
import styles from './OneMovie.module.css'

const OneMovie = (props) => {

    const items = props.moviesFromApi.Search
    const itemsRef = useRef()

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
                            <button className="moreBtn" onClick={() => Modal(item.imdbID)}>MORE</button>
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


