import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { Profile } from '../Profile/Profile';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import { SectionPart } from '../Section/Section';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { GlobalStyle } from 'CreateGlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <SectionPart title="Профиль социальной сети">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </SectionPart>
      <SectionPart title="Upload stats">
        <StatisticsList items={data} />
      </SectionPart>
      <SectionPart title="Friends List">
        <FriendList items={friends} />
      </SectionPart>
      <SectionPart title="Transaction History">
        <TransactionHistory items={transactions} />
      </SectionPart>
    </div>
  );
};
//<Profile items={user} />
// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
