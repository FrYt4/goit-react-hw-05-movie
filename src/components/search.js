
import { Link } from "react-router-dom";
import css from "../css/app.module.css";

export const Search = (setFoundMovies, searchData) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY2ZDllM2Y2YmUxYzJjYzdiNTIyNWQ0NzMwZmY1MSIsInN1YiI6IjY2NGUyMmQxZTQyNjY4ZjIzYmI5OWFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xns5WxrhMJCYlSjiQs6l6mY-PRnDOGoEgwH7d1KdBwU'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Dodaj logowanie danych
            const markup = data.results.map(movie => {
                if ('original_title' in movie) {
                    return (
                        <li className={css.points} key={movie.id} id={movie.id}>
                            <Link className={css.moviePoints} to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='' />
                                {movie.title}
                            </Link>
                        </li>
                    );
                } else if ('original_name' in movie) {
                    return (
                        <li className={css.points} key={movie.id} id={movie.id}>
                            <Link className={css.moviePoints} to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='' />
                                {movie.name}
                            </Link>
                        </li>
                    );
                }
                return null;
            });

            setFoundMovies(markup);
        })
        .catch(err => console.error(err));
};