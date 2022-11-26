import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './friendListItem.styled';

export function FriendListItem({ avatar, name, status }) {
  return (
    <>
      <Status statusOnline={status}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
