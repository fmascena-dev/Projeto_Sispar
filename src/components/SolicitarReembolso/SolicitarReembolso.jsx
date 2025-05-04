import './SolicitarReembolsoStyle.scss';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import NavBar from '../NavBar/NavBar';
import { FiDelete } from 'react-icons/fi';
// import TabelaReembolsos from '../Tabela/TabelaReembolsos';
import { useState } from 'react';
import api from '../../Api/Api'

export default function SolicitarReembolso() {
  const [tableData, setTableData] = useState([]);

  const handleSalvar = () => {
    const colaborador = document.getElementById('colaborador')?.value || '';
    const empresa = document.getElementById('empresa')?.value || '';
    const num_prestacao = document.getElementById('num_prestacao')?.value || '';
    const descricao = document.getElementById('descricao')?.value || '';
    const data = document.getElementById('data')?.value || '';
    const tipo_reembolso = document.getElementById('tipo_despesa')?.value || '';
    const centro_custo = document.getElementById('centro_custo')?.value || '';
    const ordem_interna = document.getElementById('ordem_interna')?.value || '';
    const divisao = document.getElementById('divisao')?.value || '';
    const pep = document.getElementById('pep')?.value || '';
    const moeda = document.getElementById('moeda')?.value || '';
    const distancia_km = document.getElementById('distancia_km')?.value || '';
    const valor_km = document.getElementById('valor_km')?.value || '';
    const valor_faturado =
      document.getElementById('valor_faturado')?.value || '';
    const despesa = document.getElementById('valor_despesa')?.value || '';

    const newRow = {
      colaborador,
      empresa,
      num_prestacao,
      descricao,
      data,
      tipo_reembolso,
      centro_custo,
      ordem_interna,
      divisao,
      pep,
      moeda,
      distancia_km,
      valor_km,
      valor_faturado,
      despesa,
    };

    setTableData((prev) => [...prev, newRow]);

    // limpa os campos
    [
      'colaborador',
      'empresa',
      'num_prestacao',
      'data',
      'tipo_despesa',
      'centro_custo',
      'descricao',
      'ordem_interna',
      'divisao',
      'pep',
      'moeda',
      'distancia_km',
      'valor_km',
      'valor_faturado',
      'valor_despesa',
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  };

  const handleEnviarParaAnalise = async () => {
    try {
      const response = await api.post('/reembolso/reembolsos', tableData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Dados enviados com sucesso:', response.data);
      alert('Solicitação enviada com sucesso!');
      setTableData([]); // limpa a tabela depois de enviar, se quiser
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar solicitação. Verifique a conexão com o servidor.');
    }
  };


  return (
    <>
      <NavBar />

      <section className="solicitacao__container">
        {/* Breadcrumbs */}
        <div className="solicitacao__header">
          <GoHome />
          <span>
            <IoIosArrowForward />
          </span>
          <p>Reembolsos</p>
          <span>
            <IoIosArrowForward />
          </span>
          <p>Solicitação de Reembolso</p>
        </div>

        {/* Formulário */}
        <form className="solicitacao__form">
          <div className="primary">
            <div className="linha__inputs">
              <div className="primary__input__name">
                <label htmlFor="">Nome Completo:</label>
                <input id="colaborador" type="text" />
              </div>
              <div className="primary__inputs">
                <label htmlFor="">Empresa:</label>
                <input id="empresa" type="text" />
              </div>
              <div className="primary__inputs">
                <label htmlFor="">Nº Prest. Contas:</label>
                <input id="num_prestacao" type="number" />
              </div>
            </div>

            <div className="primary__inputs">
              <label htmlFor="">Descrição / Motivo do Reembolso:</label>
              <textarea id="descricao" />
            </div>
          </div>

          <hr />

          <div className="linhas__inputs">
            <div className="seconds__inputs">
              <div className="inputs__entradas">
                <label htmlFor="">Data</label>
                <input id="data" type="date" />
              </div>

              <div className="inputs__entradas">
                <label htmlFor="">Tipo de Despesa</label>
                <select id="tipo_despesa">
                  <option value="">Selecionar</option>
                  <option value="Alimentacao"> Alimentação </option>
                  <option value="Combustivel"> Combustível</option>
                  <option value="Conducao"> Condução</option>
                  <option value="Estacionamento"> Estacionamento</option>
                  <option value="Viagem ADM"> Viagem Admin.</option>
                  <option value="Viagem Op"> Viagem Operacional</option>
                  <option value="Eventos"> Eventos de representação</option>
                </select>
              </div>

              <div className="inputs__entradas">
                <label htmlFor="">Centro de Custo</label>
                <select id="centro_custo">
                  <option value=""> Selecionar</option>
                  <option value="1100109002 - FIN CONTROLES INTERNOS MTZ">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="1100110101 - FIN CONTABILIDADE MTZ">
                    1100110101 - FIN CONTABILIDADE MTZ
                  </option>
                </select>
              </div>
            </div>

            <div className="entradas">
              <div className="entradas__inputs">
                <div className="inputs__despesas">
                  <label htmlFor="">Ord. Int.</label>
                  <input id="ordem_interna" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Div.</label>
                  <input id="divisao" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">PEP</label>
                  <input id="pep" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Moeda</label>
                  <select name="" id="moeda">
                    <option value="">Selecionar</option>
                    <option value="BRL">BRL</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Dist/KM</label>
                  <input id="distancia_km" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Valor/KM</label>
                  <input id="valor_km" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Val. Fat.</label>
                  <input id="valor_faturado" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Despesa</label>
                  <input id="valor_despesa" type="number" />
                </div>
              </div>

              <div className="form__actions">
                <button
                  type="button"
                  className="btn-salvar"
                  onClick={handleSalvar}
                >
                  +Salvar
                </button>
                <FiDelete />
              </div>
            </div>
          </div>
        </form>

        {/* Tabela */}
        <section className="section__table">
          <table className="solicitacao__tabela">
            <thead>
              <tr>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Motivo</th>
                <th>Data</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.colaborador}</td>
                  <td>{row.empresa}</td>
                  <td>{row.num_prestacao}</td>
                  <td>{row.descricao}</td>
                  <td>{row.data}</td>
                  <td>{row.tipo_reembolso}</td>
                  <td>{row.centro_custo}</td>
                  <td>{row.ordem_interna}</td>
                  <td>{row.divisao}</td>
                  <td>{row.pep}</td>
                  <td>{row.moeda}</td>
                  <td>{row.distancia_km}</td>
                  <td>{row.valor_km}</td>
                  <td>{row.valor_faturado}</td>
                  <td>{row.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Rodapé com totais */}
        <div className="solicitacao__footer">
          <div className="total__solicitacao">
            <div className="total">
              <label htmlFor="">Total Faturado</label>
              <input placeholder="R$ 0,00" />
            </div>
            <div className="total">
              <label htmlFor="">Total Despesa</label>
              <input placeholder="R$ 0,00" />
            </div>
          </div>
          <div className="footer__buttons">
            <button className="btn-enviar" onClick={handleEnviarParaAnalise}>✔ Enviar para Análise</button>
            <button className="btn-cancelar">✖ Cancelar Solicitação</button>
          </div>
        </div>
      </section>
    </>
  );
}
