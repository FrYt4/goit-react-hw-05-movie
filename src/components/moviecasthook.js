export const MovieCastData = (movieId, setCast) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY2ZDllM2Y2YmUxYzJjYzdiNTIyNWQ0NzMwZmY1MSIsInN1YiI6IjY2NGUyMmQxZTQyNjY4ZjIzYmI5OWFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xns5WxrhMJCYlSjiQs6l6mY-PRnDOGoEgwH7d1KdBwU'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const markup = data.cast.map((cast, index) => {
                const profilePath = cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : 'default-image-path'; // Replace 'default-image-path' with a placeholder image path if needed

                return (
                    <div key={index}>
                        <img src={profilePath} alt={`${cast.name}`} />
                        <p>{cast.name}</p>
                        <p>Character: {cast.character}</p>
                    </div>
                );
            });
            setCast(markup);
        })
        .catch(err => console.error('Fetch error: ', err));
};