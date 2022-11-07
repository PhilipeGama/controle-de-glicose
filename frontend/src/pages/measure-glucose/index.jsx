import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import FileUploadTable from "../../shared/components/file-upload-table";
import api from "../../services/api";

const MeasureGlucose = () => {
  const [selectedFile, setSeletedFile] = useState();
  //const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSeletedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    api.post("/upload", formData).then((response) => {
      console.log(response);
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
            Choose file
          </label>
        </div>
        {/* <div className="input-group-append">
          <span className="input-group-text" id="inputGroupFileAddon02">
            Upload
          </span>
        </div> */}
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
        // <div>
        //   <p>Nome do arquivo: {selectedFile.name}</p>
        //   <p>Tipo do arquivo: {selectedFile.type}</p>
        //   <p>Tamanho: {selectedFile.size}</p>
        //   <p>
        //     Data de modificação:{" "}
        //     {selectedFile.lastModifiedDate.toLocaleDateString()}
        //   </p>
        // </div>
        <p>Select a file to show details</p>
      )}

      <button onClick={handleSubmission}>Submit</button>
      <button type="button" className="btn btn-danger">
        <Link to="/">VOLTAR</Link>
      </button>
    </div>
  );
};

export default MeasureGlucose;
