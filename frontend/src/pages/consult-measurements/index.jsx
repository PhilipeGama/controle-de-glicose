import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";



const ConsultMeasurements = () => {
    useEffect(() => {
      api.get("/glicoses").then((response) => {
        console.log(response)
      })
    })
    return (
        <div className="container">
            <h1>Consulta medidas</h1>
            <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">CPF</th>
              <th scope="col">Data/Hora</th>
              <th scope="col">Nivel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>033.260.662-79</td>
              <td>18/02/2022</td>
              <td>132</td>
            </tr>
          </tbody>
        </table>
            <Link className="btn btn-danger" to="/">Voltar</Link>
        </div>

    )
}

export default ConsultMeasurements;