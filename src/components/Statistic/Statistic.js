import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export function Statistic({ label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
