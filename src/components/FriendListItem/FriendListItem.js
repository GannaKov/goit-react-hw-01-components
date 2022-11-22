import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, status }) {
  return (
    <>
      <span>{status}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
