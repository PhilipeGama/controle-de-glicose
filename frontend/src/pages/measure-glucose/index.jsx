import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MeasureGlucose = () => {
  const [selectedFile, setSeletedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const notify = () => toast("Arquivo salvo com sucesso!");

  const changeHandler = (event) => {
    if(event.target.files.length === 0) return;
    setSeletedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    api.post("/upload", formData).then((response) => {
      notify()
      setTimeout(() => {
        navigate("/")
      }, 4000)
  
    });
  };

  return (
    <div className="container">
      <h1>Medir Glicose</h1>
      <div className="input-group mb-3">
        <div className="custom-file">
          <input
            type="file"
            name="file"
            className="custom-file-input"
            onChange={changeHandler}
            id="inputGroupFile02"
          />
          <label
            className="custom-file-label"
            htmlFor="inputGroupFile02"
            aria-describedby="inputGroupFileAddon02"
          >
            Escolhar o arquivo
          </label>
        </div>
      </div>
      {isSelected ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">Tamanho</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedFile.name}</td>
              <td>{selectedFile.type}</td>
              <td>{selectedFile.size}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Selecione um arquivo para subir</p>
      )}
      <div className="btn-container">
        <button className="btn btn-success" onClick={handleSubmission} style={{marginRight: '10px'}}>Enviar dados</button>
        <Link className="btn btn-danger" to="/">Voltar</Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MeasureGlucose;
