import React, { ChangeEvent } from "react";
import "./styles.css";
import LogoImg from '../../assets/images/logo.png'
import ProcessImg from '../../assets/images/undraw_thought_process_re_om58.svg'

export default function Login() {
  const handleButtonSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div id='login-page-container' className='row m-0'>
      <div id='login-page-text' className="col-md-7 ">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet. Ex voluptate dolore laudantium provident aut nostrum dolorem et vitae delectus aut perspiciatis commodi et tempore quaerat est iusto quia! Aut ducimus assumenda aut autem enim et natus dolores sit placeat sunt ut libero laboriosam in eius nihil. Aut perspiciatis minima qui velit velit qui numquam tempore similique tempore!
        </p>
        <img src={ProcessImg} alt="logo-tell-m" className='w-75' />
      </div>
      <div id='login-page-form' className="col-md-5">
        <form onSubmit={handleButtonSubmit}>
          <div className="d-flex justify-content-center">
            <img src={LogoImg} alt="logo-tell-m" id='login-page-logo' />
          </div>
          <div className="mb-3">
            <h3>Login</h3>
          </div>
          <div className="mb-3">
            <p>Preencha as informações abaixo para acessar a plataforma</p>
          </div>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="InputEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="InputSenha" className="form-label">Senha</label>
            <input type="password" className="form-control" id="InputSenha" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="checkSenha" />
            <label className="form-check-label" htmlFor="checkSenha">Lembrar senha</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>

      </div>
    </div >
  );
}