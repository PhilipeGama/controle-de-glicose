import "./styles.css";

export const Login = () => {
    return (
        <div className="container">  
                <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="loginName">Email</label>
                        <input type="email" id="loginName" class="form-control" />
                    </div>


                    <div class="form-outline">
                        <label class="form-label" for="loginPassword">Senha</label>
                        <input type="password" id="loginPassword" class="form-control" />
                    </div>
                    <div class="row mb-4">

                        <div class="col-md-6">
                            <a href="#!">Esqueceu a senha?</a>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>


                    <div class="text-center">
                        <p><a href="#!">Cadastra-se</a></p>
                    </div>
                    </form>
                </div>
                </div>
        </div>
    )
}