import PropTypes from 'prop-types';
import { Statistic } from 'components/Statistic/Statistic';
import { StatList, Item } from './StatisticList.styled';
export function StatisticsList({ items }) {
  return (
    <StatList>
      {items.map(item => (
        <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
          <Statistic label={item.label} percentage={item.percentage} />
        </Item>
      ))}
    </StatList>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
