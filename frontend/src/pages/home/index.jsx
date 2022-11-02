import "./styles.css";

const Home = () => {
  return (
    <div className="container d-flex flex-column">
      <h1>CONTROLE DE GLICOSE</h1>
      <button type="button" className="btn btn-primary">MEDIR GLICOSE</button>
      <button type="button" className="btn btn-primary">AGENDAR MEDIÇÃO</button>
      <button type="button" className="btn btn-primary">CONSULTAR MEDIÇÕES</button>
      <button type="button" className="btn btn-primary">ENVIAR MEDIÇÃO</button>
      <button type="button" className="btn btn-primary">GERAR RELATÓRIO</button>
    </div>
  );
};

export default Home;

