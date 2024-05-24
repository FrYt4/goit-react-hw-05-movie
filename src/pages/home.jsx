import { useEffect, useState } from "react";
import { trending } from "components/trending";
import css from '../css/app.module.css'


export const Home = () => {
  
   const [movies, setMovies] = useState([])

    useEffect(() => {
      trending(setMovies)
  }, [])
  
  return (
    <div className={css.trending}>{movies}</div>
  )
  }