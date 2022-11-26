import PropTypes from 'prop-types';
import { Label, Percentage } from './Statistic.styled';

export function Statistic({ label, percentage }) {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
}
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
