import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signIn } from "../../services/auth";
import "./styles.css";

const Login = () => {
    const [inputs, setInputs] = useState({})

    let navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signIn(inputs.email, inputs.password);  
            navigate("/")       
        } catch (error) {
            throw new ErrorEvent(error);
        }
     
    }

    return (
        <div className="container">  
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
                        <Link>Esqueceu a senha?</Link>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Entrar</button>

                <div className="text-center">
                    <Link to="/register">Cadastra-se</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;