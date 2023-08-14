import PageBaseFilmes from "./PageBaseFilmes";


function PopularMovies() {
  const urlBase = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`

return (
  <PageBaseFilmes url= {urlBase} />
)

}

export default PopularMovies;