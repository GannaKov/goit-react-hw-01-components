import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListUl, Item } from './FriendList.styled';

export function FriendList({ items }) {
  return (
    <FriendListUl>
      {items.map(item => (
        <Item key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            status={item.isOnline}
          />
        </Item>
      ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
