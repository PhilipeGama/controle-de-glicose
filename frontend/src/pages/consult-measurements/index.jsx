import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import ReactPaginate from 'react-paginate';
import Moment from 'moment';

import "./styles.scss"

const ConsultMeasurements = () => {
  const [data, setData] = useState([])
  const [meta, setMeta] = useState([])
  const [filters, setFilters] = useState({cpf: '', examDate: '', examHour: ''})
  const limit = 10;

  useEffect(() => {
    const page = 0; 
    api.post(`/glicoses-paginated?page=${page}&limit=${limit}`, filters).then((response) => {
      setData(response.data.data)
      setMeta(response.data.meta)
    })
  }, [])

  const handleInputs = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFilters(values => ({...values, [name]: value}));
  }

  const handlePageClick = (event) => {
    const page = event.selected || 0;
    console.log(filters)
    api.post(`/glicoses-paginated?page=${page}&limit=${limit}&cpf=${filters.cpf}`, filters).then((response) => {
      console.log(response)
      setData(response.data.data)
      setMeta(response.data.meta)
    })
  }

  return (
      <div className="container d-flex flex-column">
          <h1>Consulta medidas</h1>
       
        <div className="form-group d-flex">
            <input className="form-control" type="text" id="cpf" name="cpf" placeholder="Buscar pelo CPF" onChange={handleInputs}/>
            <div className="filters">
              <input className="form-control"  id="date" type="date" name="examDate" onChange={handleInputs}/>
              <input className="form-control"  id="time" type="time" name="examHour" onChange={handleInputs}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handlePageClick}>Buscar</button>
        </div>

  


        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">CPF</th>
            <th scope="col">Data do Exame</th>
            <th scope="col">Nivel</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((val, key) => {
              return(
                  <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.cpf}</td>
                  <td>{Moment(val.examDate).format('d MMM YYYY')}</td>
                  <td>{val.nivel}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

      <ReactPaginate
           activeClassName={'item active '}
           breakClassName={'item break-me '}
           breakLabel={'...'}
           containerClassName={'pagination'}
           disabledClassName={'disabled-page'}
           marginPagesDisplayed={2}
           nextClassName={"item next "}
           nextLabel="next >"
           onPageChange={handlePageClick}
           pageCount={meta.totalPage}
           pageClassName={'page-item'}
           pageRangeDisplayed={2}
           previousClassName={"item previous"}
           previousLabel="< previous"
      />
  
      <Link className="btn btn-danger" to="/">Voltar</Link>
    </div>

  )
}

export default ConsultMeasurements;