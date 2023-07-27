import { useDispatch, useSelector } from "react-redux"
import { removeFavorites } from "../redux/slice/filmsSlice";

export default function Favorites() {
    const { favorites } = useSelector((state) => state.films);
    const dispatch = useDispatch();

    return (
        <ul className="favorites">
            {favorites.map((favorite) => (
                <li className="card_film favorite">
                    <img src={favorite.Poster}/>
                <div>
                    <h4>{favorite.Title}</h4>
                    <ul className="film">
                        <li>Year: {favorite.Year}</li>
                        <li>Genre: {favorite.Genre}</li>
                        <li>Runtime: {favorite.Runtime}</li>
                        <li>Director: {favorite.Director}</li>
                        <li>Actors: {favorite.Actors}</li>
                        <li>Rating: {favorite.imdbRating}</li>
                    </ul>
                    <button onClick={() => dispatch(removeFavorites(favorite.imdbID))}>Remove from favorites</button>
                    </div>
                </li>
            ))}
        </ul> 
   )
}