import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import MenuReembolso from './components/MenuReembolso/MenuReembolso';
import SolicitarReembolso from './components/SolicitarReembolso/SolicitarReembolso';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolsos" element={<MenuReembolso />} />
        <Route path="/solicitacao" element={<SolicitarReembolso />} />
      </Routes>
    </BrowserRouter>
  );
}
