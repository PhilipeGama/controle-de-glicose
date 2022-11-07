import {useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";
import "./styles.css";
import { Link } from "react-router-dom";


const Home = () => {
 const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="container d-flex flex-column">
      <h1>CONTROLE DE GLICOSE</h1>
      <button type="button" className="btn btn-primary"><Link to="/measure-glicose">MEDIR GLICOSE</Link></button>
      <button type="button" className="btn btn-primary">AGENDAR MEDIÇÃO</button>
      <button type="button" className="btn btn-primary">CONSULTAR MEDIÇÕES</button>
      <button type="button" className="btn btn-primary">ENVIAR MEDIÇÃO</button>
      <button type="button" className="btn btn-primary">GERAR RELATÓRIO</button>
      <button type="button" className="btn btn-danger" onClick={() => handleLogout()}>SAIR</button>
    </div>
  );
};

export default Home;

