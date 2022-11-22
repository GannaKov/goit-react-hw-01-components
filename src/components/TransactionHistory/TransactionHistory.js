import PropTypes from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';

export function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionRow
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};
