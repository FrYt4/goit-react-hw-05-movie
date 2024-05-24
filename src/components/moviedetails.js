export const movieData = (movieId, setDetails) => {
    const options={
     method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY2ZDllM2Y2YmUxYzJjYzdiNTIyNWQ0NzMwZmY1MSIsInN1YiI6IjY2NGUyMmQxZTQyNjY4ZjIzYmI5OWFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xns5WxrhMJCYlSjiQs6l6mY-PRnDOGoEgwH7d1KdBwU'
  }
  }
    fetch(`https://api.themoviedb.org/3/movie/${movieId}language=en-US`, options)
        .then(response => response.json())
        .then(data => {
            let moiveGenres = data.genres.map((gen, index)=>{return(
                    <p key={index} >{gen.name}</p>
            )})
            const movieDetails = (
                <div>
                    
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt=''></img>
                    </div>
                    <div>
                        <p>{data.title}</p>
                        <p>User Score: {data.vote_average}</p>
                        <p>Overview</p>
                        <p>{data.overview}</p>
                        <p>Genres</p>
                        <div>{moiveGenres}</div>
                    </div>
                </div>
            );
            setDetails(movieDetails);
        })
           
        }