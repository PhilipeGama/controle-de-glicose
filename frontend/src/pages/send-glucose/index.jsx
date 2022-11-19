import { Link } from "react-router-dom";

const SendGlucose = () => {
    return(
        <div className="container">
            <h1>Enviar Medição</h1>
            <div className="form-outline mb-4 d-flex">
                    <label className="form-label" htmlFor="name">Email</label>
                    <input 
                        className="form-control"  
                        type="email" 
                        name="name" 
                   
                    />
                <button className="btn btn-success">Enviar</button>  
                <Link className="btn btn-danger" to="/">Voltar</Link>  
                </div>
        </div>
    )
}

export default SendGlucose; 