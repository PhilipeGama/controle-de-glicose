import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import ReactPaginate from 'react-paginate';
import Moment from 'moment';


import "./styles.scss"

const ConsultGlucose = () => {
  const [data, setData] = useState([])
  const [meta, setMeta] = useState({totalPage: 0})
  const [filters, setFilters] = useState({examDate: '', examHour: ''})
  const limit = 10;

  useEffect(() => {
    const page = 0; 
    api.post(`/glucoses-paginated?page=${page}&limit=${limit}`, filters).then((response) => {
      setData(response.data.data)
      setMeta(response.data.meta)
    })
  }, [filters])

  const handleInputs = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFilters(values => ({...values, [name]: value}));
  }

  const handleClear = (event) => {
    setFilters({examDate: '', examHour: ''});

    api.post(`/glucoses-paginated?page=${0}&limit=${limit}`).then((response) => {
      setData(response.data.data)
      setMeta(response.data.meta)
    })
  }

  const handlePagination = (event) => {
    const page = event.selected || 0;

    api.post(`/glucoses-paginated?page=${page}&limit=${limit}&cpf=${filters.cpf}`, filters).then((response) => {
      setData(response.data.data)
      setMeta(response.data.meta)
    })
  }

  return (
      <div className="container d-flex flex-column">
          <h1>Consulta medidas</h1>
       
        <div className="form-group d-flex">
            <div className="filters">
              <input className="form-control" id="date" type="date" name="examDate" value={filters.examDate} onChange={handleInputs}/>
              <input className="form-control" id="time" type="time" name="examHour" value={filters.examHour} onChange={handleInputs}/>
            </div>
            <button type="button" className="btn btn-warning" onClick={handleClear}>Limpar</button>
            <button type="button" className="btn btn-primary" onClick={handlePagination}>Buscar</button>
        </div>

        <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Data do Exame</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((val, key) => {
              return(
                  <tr key={key}>
                  <td>{val.id}</td>
                  <td>{Moment(val.examDate+' '+ val.examHour).locale('pt-br').format('LLL')}</td>
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
           nextLabel=">"
           onPageChange={handlePagination}
           pageCount={meta.totalPage}
           pageClassName={'page-item'}
           pageRangeDisplayed={2}
           previousClassName={"item previous"}
           previousLabel="<"
      />
  
      <Link className="btn btn-danger" to="/">Voltar</Link>
    </div>

  )
}

export default ConsultGlucose;