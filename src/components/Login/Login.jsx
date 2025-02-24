import './LoginStyles.scss';
import ImgPrincipal from '../../images/img-initial.png';

export default function Login() {
  return (
    <section className="login__home">
      <div className="imagem__inicial">
        <img src={ImgPrincipal} alt="Imagem de um Navio" />
      </div>
      <div className="login__principal">
        <img src="/logo_sispar.svg" alt="Logo da Sispar" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <h3>Sistema de Emissão de Boletos e Parcelamento</h3>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <a href="#">Esqueci minha senha</a>
        <div className="btns__login">
          <button className="btn__primary">Entrar</button>
          <button className="btn__secondary">Criar conta</button>
        </div>
      </div>
    </section>
  );
}
