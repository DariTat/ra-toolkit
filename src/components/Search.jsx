import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchFilms } from "../redux/slice/filmsSlice";

export default function Search() {
    const { films, loading, error } = useSelector((state) => state.films)
    const [film, setFilm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(films)
    const handleChange = (e) => {
        setFilm(e.target.value);
    }

    const onSearch = (e) => {
        e.preventDefault();
        if (film === '') return;
        dispatch(fetchFilms(film));
        (navigate('./films'))
    }

    return (
        <>
            <form onSubmit={onSearch}>
                <input type='text' onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
            {loading && <h4>Loading...</h4>}
            <h4>{films.Error}</h4>
           
        </>
        
    )
}