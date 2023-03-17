import React from 'react'
import styles from './OneMovie.module.css'

const OneMovie = (props) => {

    console.log(props.moviesFromApi.Search)
    const items = props.moviesFromApi.Search

    return (
        <div className={styles.list}> 
            {
                items?items.map(item => {
                    return(
                        <div key={item.id} className={styles.oneMovie}>
                            <h2 className={styles.glitchXL}>{item.Type}</h2>
                            <h2 className={styles.glitchXXL}>{item.Title}</h2>
                            <img src={item.Poster} alt={item.title} className={styles.mainImg}></img>
                            <h2 className={styles.glitchXL}>{item.Year}</h2>
                        </div>
                    )
                }):'not found'
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


