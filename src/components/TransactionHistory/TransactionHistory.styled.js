import styled from 'styled-components';

export const Table = styled.table`
width: 500px;
  margin: 0 auto;
  background-color: rgb(248, 248, 246); th {
  background-color: rgb(74, 74, 216);
  color: aliceblue;
  `;

export const Th = styled.th`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tr = styled.tr`
  text-align: center;
  :nth-child(2n) {
    background-color: rgb(232, 236, 235);
  }
`;
