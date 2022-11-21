import PropTypes from 'prop-types';
export function Statistic({ label, percentage }) {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>;
    </>
  );
}
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
