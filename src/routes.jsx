import { Route, Routes } from "react-router-dom";
import PopularMovies from "./components/PopularMovies";
import Details from "./components/Details";
import SearchResults from "./components/SearchResults";

function Rotas() { 
  return (
    <Routes>
      <Route index path="/" element={<PopularMovies/>} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/pesquisa/:filme" element={<SearchResults />} />
    </Routes>
  )
}

export default Rotas;