import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "../pages/home";
import { MovieDetails } from "../pages/moviedetails";
import { MovieCast } from "../pages/moviecast";
import { MovieReviews } from "../pages/movierevievs";
import { Movies } from "../pages/movies";
import css from "../css/app.module.css"
import styled from 'styled-components';


  const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &.active {
    color: red;
  }
`;

export const App = () => {
   

  
  return (
   <>
    <div>
      <nav className={css.nav}>
          <StyledLink to="/" >Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='/movies/:movieId/cast' element={<MovieCast />} />
            <Route path='/movies/:movieId/reviews' element={<MovieReviews />} /> 
          </Route>
          
        </Routes>
    </div>
    </> 
  );
};