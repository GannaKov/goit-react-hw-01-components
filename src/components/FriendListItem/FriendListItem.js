import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, status }) {
  return (
    <>
      {getStatusSpan(status)}
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

function getStatusSpan(isOnline) {
  const classNames = [css.status];
  if (isOnline) {
    classNames.push(css.isOnline);
  } else {
    classNames.push(css.notOnline);
  }

  return <span className={classNames.join(' ')}></span>;
}
