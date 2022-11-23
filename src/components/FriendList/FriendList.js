import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export function FriendList({ items }) {
  return (
    <ul className={css.friendList}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
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
