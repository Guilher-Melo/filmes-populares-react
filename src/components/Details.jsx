import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style/details.css";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie , setMovie] = useState([]);
  const imagem = 'https://image.tmdb.org/t/p/w500';
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`;

  function handleVoltar() {
    navigate(-1);
  }
  useEffect(()=> {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      const {title, overview, backdrop_path, poster_path, vote_average, tagline} = data;
      console.log(data)
      const movie = {
        title,
        overview,
        backdrop_path,
        poster_path,
        vote_average,
        tagline
      }
      setMovie(movie)
    })
  },[id, url])
  return(
    <div className="conteudo-details">
      <div className="div-imagem">
        <img src={`${imagem}${movie.backdrop_path ? movie.backdrop_path : "Carregando"}`} alt="Imagem de fundo" className="img-fundo" />
      </div>
      <div className="fundo"></div>
      <div className="content">
        <div className="div-imagem-poster">
          <img src={`${imagem}${movie.poster_path}`} alt="Imagem poster" className="img-poster-details" />
          <div className="titulo-subtitulo">
            <h1>{movie.title ? movie.title : 'Carregando...'}</h1>
            <br/>
            <h3 className="tagline">{movie.tagline}</h3>
          </div>
        </div>
      </div>
      <div className="sinopse">
          <p>{movie.overview}</p>
          <span className={movie.vote_average >= 7.4 ? "green" : movie.vote_average > 6 ? "yellow" : "red"}>
            {Math.max(movie.vote_average).toFixed(2)}
          </span>
        </div>
        <div className="div-btn-voltar">
          <button onClick={handleVoltar}>Voltar</button>
        </div>
      {console.log(movie)}
    </div>
  )
}

export default Details;