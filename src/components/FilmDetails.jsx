import { useSelector, useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../redux/slice/filmsSlice";
import { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function FilmDetails() {
    const { film, favorites } = useSelector((state) => state.films);
    const { Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating } = film;
    const [ checked, setChecked ] = useState(false);
    const dispatch = useDispatch();
    console.log(favorites)

    const handleChange = () => {
        if (checked === false) {
            setChecked(true)
            dispatch(addFavorites(film))
            console.log('add')
        } else {
            setChecked(false)
            dispatch(removeFavorites(film.imdbID))
            console.log('remove')
        }
    }
    return (
        <>
            <div className="card_film">
                
                <img src={Poster}/>
                <div>
                    <h4>{Title}</h4>
                    <ul className="film">
                        <li>Year: {Year}</li>
                        <li>Genre: {Genre}</li>
                        <li>Runtime: {Runtime}</li>
                        <li>Director: {Director}</li>
                        <li>Actors: {Actors}</li>
                        <li>Rating: {imdbRating}</li>
                    </ul>
                    <label>
                        <input type="checkbox" checked={checked} onChange={handleChange} />
                        <span>Favorites</span>
                    </label>
                </div>
                <NavLink to='/films'><button>x</button></NavLink>
            </div>
        </>
    )
}