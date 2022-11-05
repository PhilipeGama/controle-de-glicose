import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../../services/auth";
import * as yup from "yup";

const Register = () => {
    const [inputs, setInputs] = useState({})
    const [status, setStatus] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(validateForm()) return;

        try {
            await signUp(inputs.name, inputs.email, inputs.password)
        } catch (error) { }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value }))
    }

    const validateForm = async () => {
        let schema = yup.object().shape({
            confirmPassword: yup.string("Confirmar senha obrigatória!").required("Confirmar senha obrigatória!"),
            password: yup.string("Senha obrigatória!").required("Senha obrigatória!"),
            email: yup.string("Email obrigatório!").email("Email inválido!").required("Email inválido!"),
            name: yup.string("Nome obrigatório!").required("Nome inválido!"),
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

    return(
        <div className="container">
            {status.type === "error" ? <div className="alert alert-danger" role="alert">{status.message}</div> : ""}
            <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">Nome</label>
                    <input 
                        className="form-control"  
                        type="name" 
                        name="name" 
                        value={inputs.name || ""} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input 
                        className="form-control"  
                        type="email" 
                        name="email" 
                        value={inputs.email || ""} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Senha</label>
                    <input 
                        className="form-control"  
                        type="password" 
                        name="password" 
                        value={inputs.password || ""} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="confirmPassword">Confirma Senha</label>
                    <input 
                        className="form-control"  
                        type="confirmPassword" 
                        name="confirmPassword" 
                        value={inputs.confirmPassword || ""} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Cadastra-se</button>

                <div className="text-center">
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        
    )
}

export default Register;