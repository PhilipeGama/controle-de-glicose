import { useState } from "react";
import "./styles.css";

const Login = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs))
    }

    return (
        <div className="container">  
                <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="loginName">Email</label>
                        <input 
                            className="form-control"  
                            type="email" 
                            name="email" 
                            value={inputs.email || ""} 
                            onChange={handleChange} 
                        />
                    </div>


                    <div className="form-outline">
                        <label className="form-label" htmlFor="loginPassword">Senha</label>
                        <input 
                            className="form-control"  
                            type="password" 
                            name="password" 
                            value={inputs.password || ""} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="row mb-4">

                        <div className="col-md-6">
                            <a href="#!">Esqueceu a senha?</a>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block mb-4">Entrar</button>


                    <div className="text-center">
                        <p><a href="#!">Cadastra-se</a></p>
                    </div>
                    </form>
                </div>
                </div>
        </div>
    )
}

export default Login;