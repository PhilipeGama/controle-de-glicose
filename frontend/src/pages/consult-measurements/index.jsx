import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";



const ConsultMeasurements = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get("/glicoses").then((response) => {
      setData(response.data)
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
        <tbody className="table-body">
          {data.map((val, key) => {
              return(
                  <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.cpf}</td>
                  <td>{val.datahora}</td>
                  <td>{val.nivel}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
          <Link className="btn btn-danger" to="/">Voltar</Link>
      </div>

  )
}

export default ConsultMeasurements;