import PropTypes from 'prop-types';

export default function TabelaReembolsos({ reembolsos = [] }) {
  return (
    <tbody>
      {reembolsos.length === 0 ? (
        <tr>
          <td colSpan="15" style={{ textAlign: 'center' }}>
            Nenhum reembolso cadastrado.
          </td>
        </tr>
      ) : (
        reembolsos.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.empresa}</td>
            <td>{item.numeroPrestacao}</td>
            <td>{item.data}</td>
            <td>{item.motivo}</td>
            <td>{item.tipoDespesa}</td>
            <td>{item.centroCusto}</td>
            <td>{item.ordemInterna}</td>
            <td>{item.divisao}</td>
            <td>{item.pep}</td>
            <td>{item.moeda}</td>
            <td>{item.distanciaKm}</td>
            <td>{item.valorKm}</td>
            <td>{item.valorFaturado}</td>
            <td>{item.valorDespesa}</td>
          </tr>
        ))
      )}
    </tbody>
  );
}

TabelaReembolsos.propTypes = {
  reembolsos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
