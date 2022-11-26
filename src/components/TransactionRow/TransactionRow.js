import PropTypes from 'prop-types';
import { Td } from './TransactionRow.styled';

export function TransactionRow({ type, amount, currency }) {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
}
TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
