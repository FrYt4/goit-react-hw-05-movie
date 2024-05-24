import { useEffect, useState } from "react";
import { useParams, useLocation} from "react-router-dom";
import { movieData } from "components/moviedetails";
import { Link, Outlet } from "react-router-dom";
import { Loader } from "pages/Loader";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState()
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
   
    useEffect(() => {
            movieData(movieId, setDetails);
    }, [movieId]);

    return (
         <div>
            <Link  to={backLinkHref}>Back to list</Link >
            {details ? (
                <div>
                    {details}
                    <li id={movieId}>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li id={movieId}>
                        <Link to="reviews">Reviews</Link>
                    </li>
                    <Outlet />
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}