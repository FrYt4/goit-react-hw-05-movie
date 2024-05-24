
export const MovieRevievsData = (movieId, setRevievs) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY2ZDllM2Y2YmUxYzJjYzdiNTIyNWQ0NzMwZmY1MSIsInN1YiI6IjY2NGUyMmQxZTQyNjY4ZjIzYmI5OWFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xns5WxrhMJCYlSjiQs6l6mY-PRnDOGoEgwH7d1KdBwU'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0].author);
            const markup = data.results.map((result, index) => (
                <div key={index}>
                    <li>Author: {result.author}</li>
                    <p>{result.content}</p>
                </div>
            ));
            setRevievs(markup);
        })
        .catch(err => console.error(err));
};