import { useState } from 'react';
import './header.css';
import {BsSearch} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");

  function limpaInput() {
    setPesquisa("");
  }

  function keyEnter(event) {
    if(event.key === "Enter") {
      navigate(`/pesquisa/${pesquisa}`)
      limpaInput();
    }
  }

  return (
    <>
    <nav className='nav-header'>
      <Link to={"/"} className='titulo'>
        <h1>Filmes Populares</h1>
      </Link>
      <input type="text" placeholder="Buscar filme" value={pesquisa}  onChange={(e) => setPesquisa(e.target.value)}
       onKeyDown={(e) => keyEnter(e)}/>
      <div className='icon-busca'>
        <Link to={`/pesquisa/${pesquisa}`}><button onClick={limpaInput}><BsSearch/></button></Link>
      </div>
    </nav>
    </>
  )
}

export default Header;