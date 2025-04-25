import './SolicitarReembolsoStyle.scss';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import NavBar from '../NavBar/NavBar';
import { FiDelete } from 'react-icons/fi';
// import TabelaReembolsos from '../Tabela/TabelaReembolsos';
import { useState } from 'react';

export default function SolicitarReembolso() {
  const [tableData, setTableData] = useState([]);

  const handleSalvar = () => {
    const nome = document.getElementById('nome')?.value || '';
    const empresa = document.getElementById('empresa')?.value || '';
    const prestacao = document.getElementById('prestacao')?.value || '';
    const motivo = document.getElementById('motivo')?.value || '';
    const data = document.getElementById('data')?.value || '';
    const tipoDespesa = document.getElementById('tipo-despesa')?.value || '';
    const centroCusto = document.getElementById('centro-custo')?.value || '';
    const ordemInterna = document.getElementById('ordem-interna')?.value || '';
    const divisao = document.getElementById('divisao')?.value || '';
    const pep = document.getElementById('pep')?.value || '';
    const moeda = document.getElementById('moeda')?.value || '';
    const distKm = document.getElementById('dist-km')?.value || '';
    const valorKm = document.getElementById('valor-km')?.value || '';
    const valorFaturado =
      document.getElementById('valor-faturado')?.value || '';
    const valorDespesa = document.getElementById('valor-despesa')?.value || '';

    const newRow = {
      nome,
      empresa,
      prestacao,
      motivo,
      data,
      tipoDespesa,
      centroCusto,
      ordemInterna,
      divisao,
      pep,
      moeda,
      distKm,
      valorKm,
      valorFaturado,
      valorDespesa,
    };

    setTableData((prev) => [...prev, newRow]);

    // limpa os campos
    [
      'nome',
      'empresa',
      'prestacao',
      'data',
      'tipo-despesa',
      'centro-custo',
      'motivo',
      'ordem-interna',
      'divisao',
      'pep',
      'moeda',
      'dist-km',
      'valor-km',
      'valor-faturado',
      'valor-despesa',
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
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
                <input id="nome" type="text" />
              </div>
              <div className="primary__inputs">
                <label htmlFor="">Empresa:</label>
                <input id="empresa" type="text" />
              </div>
              <div className="primary__inputs">
                <label htmlFor="">Nº Prest. Contas:</label>
                <input id="prestacao" type="number" />
              </div>
            </div>

            <div className="primary__inputs">
              <label htmlFor="">Descrição / Motivo do Reembolso:</label>
              <textarea id="motivo" />
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
                <select id="tipo-despesa">
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
                <select id="centro-custo">
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
                  <input id="ordem-interna" type="number" />
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
                  <input id="dist-km" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Valor/KM</label>
                  <input id="valor-km" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Val. Fat.</label>
                  <input id="valor-faturado" type="number" />
                </div>

                <div className="inputs__despesas">
                  <label htmlFor="">Despesa</label>
                  <input id="valor-despesa" type="number" />
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
                <th>Data</th>
                <th>Motivo</th>
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
                  <td>{row.nome}</td>
                  <td>{row.empresa}</td>
                  <td>{row.prestacao}</td>
                  <td>{row.motivo}</td>
                  <td>{row.data}</td>
                  <td>{row.tipoDespesa}</td>
                  <td>{row.centroCusto}</td>
                  <td>{row.ordemInterna}</td>
                  <td>{row.divisao}</td>
                  <td>{row.pep}</td>
                  <td>{row.moeda}</td>
                  <td>{row.distKm}</td>
                  <td>{row.valorKm}</td>
                  <td>{row.valorFaturado}</td>
                  <td>{row.valorDespesa}</td>
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
            <button className="btn-enviar">✔ Enviar para Análise</button>
            <button className="btn-cancelar">✖ Cancelar Solicitação</button>
          </div>
        </div>
      </section>
    </>
  );
}
