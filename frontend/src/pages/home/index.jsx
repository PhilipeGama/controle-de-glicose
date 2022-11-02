import "./styles.css";

export const Home = () => {
  return (
    <div className="container d-flex flex-column">
      <h1>CONTROLE DE GLICOSE</h1>
      <button type="button" class="btn btn-primary">MEDIR GLICOSE</button>
      <button type="button" class="btn btn-primary">AGENDAR MEDIÇÃO</button>
      <button type="button" class="btn btn-primary">CONSULTAR MEDIÇÕES</button>
      <button type="button" class="btn btn-primary">ENVIAR MEDIÇÃO</button>
      <button type="button" class="btn btn-primary">GERAR RELATÓRIO</button>
    </div>
  );
};

