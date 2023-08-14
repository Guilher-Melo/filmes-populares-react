import { useParams } from "react-router-dom";
import PageBaseFilmes from "./PageBaseFilmes";

function SearchResults() {
  const { filme } = useParams();
  const urlBusca = `https://api.themoviedb.org/3/search/movie?api_key=${ import.meta.env.VITE_API_KEY }&query=${filme}&language=pt-BR&page=1&include_adult=false`
  {console.log(filme)}
  return (
    <PageBaseFilmes url={urlBusca} />
  )
}

export default SearchResults;