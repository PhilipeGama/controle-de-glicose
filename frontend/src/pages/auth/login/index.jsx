import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signIn } from "../../../services/auth";

import "./styles.css";
import * as yup from "yup";

const Login = () => {
    const [inputs, setInputs] = useState({})
    const [status, setStatus] = useState({})

    let navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(await validateForm() === false) {
            return
        }

        try {
            const isAuth = await signIn(inputs.email, inputs.password);  
            if(isAuth) {
                navigate("/")  
                return    
            } else {
                setStatus({
                    type: "error",
                    message: "Login inválido!"
                })
            }

        } catch (error) { }
     
    }

    const validateForm = async () => {
        let schema = yup.object().shape({
            password: yup.string("Senha inválido!").required("Senha obrigatória!"),
            email: yup.string("Email obrigatório!").required("Email obrigátorio!").email("Email inválido!"),
        });
        try {
            await schema.validate(inputs);
            return true;
        } catch (err) {
            setStatus({
                type: "error",
                message: err.errors
            })
            return false;
        }
    }

    return (
        <div className="container">  
            {status.type === "error" ? <div className="alert alert-danger" role="alert">{status.message}</div> : ""}
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