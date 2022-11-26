import styled from 'styled-components';
export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;

  width: 300px;
  margin: 0 auto;
  align-items: flex-start;
  row-gap: 15px;
`;

export const Item = styled.li`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
