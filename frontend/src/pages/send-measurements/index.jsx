const SendMeasurements = () => {
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
                </div>
        </div>
    )
}

export default SendMeasurements; 