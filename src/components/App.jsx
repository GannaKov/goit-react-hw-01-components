import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Section } from './Section/Section';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Профиль социальной сети">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats">
        <StatisticsList items={data} />
      </Section>
      <Section title="Friends List">
        <FriendList items={friends} />
      </Section>
    </div>
  );
};
//<Profile items={user} />
