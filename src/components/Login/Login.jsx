import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyles.scss';
import ImgPrincipal from '../../images/img-initial.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

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
      setErrorMessage('');
      // Aqui você pode redirecionar para a página de reembolsos
      navigate('/reembolsos');
    }
  };

  return (
    <main className="login__home">
      <section className="imagem__inicial">
        <img src={ImgPrincipal} alt="Imagem de um Navio" />
      </section>

      <section className="login__principal">
        <div className="login__text-form">
          <img src="/logo_sispar.svg" alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR</h1>
          <h3>Sistema de Emissão de Boletos e Parcelamento</h3>

          <form
            className="login__form"
            onSubmit={(e) => e.preventDefault()}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin();
              }
            }}
          >
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

          <div className="btns__login">
            <button className="btn__primary" onClick={handleLogin}>
              Entrar
            </button>
            <button className="btn__secondary">Criar conta</button>
          </div>
        </div>
      </section>
    </main>
  );
}
