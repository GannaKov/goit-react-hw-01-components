import styled from 'styled-components';
export const StatList = styled.ul`
  display: flex;

  margin: 0 auto;
  justify-content: center;

  width: 501px;
  border: 1px solid gray;
  border-radius: 2%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Item = styled.li`
  padding: 20px;
  width: calc(100% / 5);
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;
