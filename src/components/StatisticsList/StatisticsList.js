import PropTypes from 'prop-types';
import { Statistic } from 'components/Statistic/Statistic';
export function StatisticsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Statistic label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};
