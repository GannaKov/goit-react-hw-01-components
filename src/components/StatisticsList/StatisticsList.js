import PropTypes from 'prop-types';
import { Statistic } from 'components/Statistic/Statistic';
import css from './StatisticList.module.css';
export function StatisticsList({ items }) {
  return (
    <ul className={css.statList}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <Statistic label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};
