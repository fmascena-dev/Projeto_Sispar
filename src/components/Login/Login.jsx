import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyles.scss';
import ImgPrincipal from '../../images/img-initial.png';
import api from '../../Api/Api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let valid = true;

    try {
      const resposta = await api.post('/colaborador/login', {
        email: email,
        senha: password,
      });
      if (valid) {
        console.log(resposta.data);
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar para a página de reembolsos
        navigate('/reembolsos');
      }
    } catch (error) {
      console.log('Erro ao fazer login: ', error);
      alert('Erro no login aqui ó!');
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
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#">Esqueci minha senha</a>
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
