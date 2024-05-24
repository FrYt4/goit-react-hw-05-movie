import { MovieCastData } from "components/moviecasthook"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "pages/Loader";

export const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState()
    

    useEffect(() => {
         MovieCastData(movieId, setCast);
     }, [movieId]);
    
    
    return (
        <div>
            {cast ? (
           <div>
                {cast}
            </div>
            ) : (
            <Loader/>
            )}
        </div>
);
}