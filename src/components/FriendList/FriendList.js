import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            status={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
