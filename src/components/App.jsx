import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Section } from './Section/Section';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
//<Profile items={user} />
