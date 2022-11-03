import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../services/auth";

const Register = () => {
    const [inputs, setInputs] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs))
        signUp(inputs.name, inputs.email, inputs.password)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value }))
    
    }

    return(
        <div className="container">
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