import PropTypes from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';
import { Table, Th, Tr } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <TransactionRow
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};
