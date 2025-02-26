import { useState } from 'react';
import './LoginStyles.scss';
import ImgPrincipal from '../../images/img-initial.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError(true);
      setErrorMessage('Email inválido.');
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      setErrorMessage('Senha inválida. Deve conter pelo menos 8 caracteres.');
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      // Processar login...
      setErrorMessage('');
      alert('Login bem-sucedido!');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <section path='login' className="login__home">
      <div className="imagem__inicial">
        <img src={ImgPrincipal} alt="Imagem de um Navio" />
      </div>

      <div className="login__principal">
        <img src="/logo_sispar.svg" alt="Logo da Sispar" />

        <div className="login__text-form">
          <h1>Boas vindas ao Novo Portal SISPAR</h1>
          <h3>Sistema de Emissão de Boletos e Parcelamento</h3>

          <form className="login__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'error' : ''}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'error' : ''}
              required
            />
            <a href="#">Esqueci minha senha</a>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>

        <div className="btns__login">
          <button className="btn__primary" onClick={handleLogin}>
            Entrar
          </button>
          <button className="btn__secondary">Criar conta</button>
        </div>
      </div>
    </section>
  );
}
