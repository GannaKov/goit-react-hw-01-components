import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export function FriendListItem({ avatar, name, status }) {
  return (
    <>
      <span
        className={css.status}
        style={{ backgroundColor: getStatusColor(status) }}
      >
        {status}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
function getStatusColor(variant) {
  switch (variant) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'blue';
  }
}
