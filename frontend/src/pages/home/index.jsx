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
      <Link className="btn btn-primary" to="/measure-glicose">MEDIR GLICOSE</Link>
      <Link className="btn btn-primary">AGENDAR MEDIÇÃO</Link>
      <Link className="btn btn-primary">CONSULTAR MEDIÇÕES</Link>
      <Link className="btn btn-primary">ENVIAR MEDIÇÃO</Link>
      <Link className="btn btn-primary">GERAR RELATÓRIO</Link>
      <Link className="btn btn-danger" onClick={() => handleLogout()}>SAIR</Link>
    </div>
  );
};

export default Home;

