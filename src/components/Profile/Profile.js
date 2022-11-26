import PropTypes from 'prop-types';
import {
  ProfileDiv,
  DescriptionDiv,
  AvatarImg,
  Name,
  Tag,
  Location,
  StatsUl,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileDiv>
      <DescriptionDiv>
        <AvatarImg src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionDiv>
      <StatsUl>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </StatsUl>
    </ProfileDiv>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
