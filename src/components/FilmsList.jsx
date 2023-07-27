import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchFilm } from "../redux/slice/filmsSlice";

export default function FilmsList() {
    const { films } = useSelector((state) => state.films)
    const dispatch = useDispatch();

    return (
        <ul className="list_films">
            {films.Search?.length ? (
                films.Search.map((film) => (
                    <NavLink to={`/films/${film.imdbID}`}>
                        <li onClick={()=> dispatch(fetchFilm(film.imdbID))}
                        key={film.imdbID}>
                            {film.Title}
                        </li>
                    </NavLink>
                ))
            ) : (
                <h4>{films.Error}</h4>
            )}
        </ul>
    )
}