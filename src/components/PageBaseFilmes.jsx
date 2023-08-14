/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style/pageBaseFilmes.css";
import { Link } from "react-router-dom";


function PageBaseFilmes(props) {
  const [movies , setMovies] = useState([]);
  const imagem = 'https://image.tmdb.org/t/p/w500';

  useEffect(()=> {
    const url = props.url;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
      console.log(data.results)
    })
  }, [props.url]);

 

  return (
    <div>
      <ul className="lista-filmes">
        {movies.map((movie) => (
          movie.poster_path !== null ?
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
            <img src={`${imagem}${movie.poster_path}`} alt="Imagem-poster"></img>
            </Link>
            <div>
              <span>{movie.title}</span>
              </div>
          </li> : ""
        ))}
      </ul>
    </div>
  )
}

export default PageBaseFilmes;