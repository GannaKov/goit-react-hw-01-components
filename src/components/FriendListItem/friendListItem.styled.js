import styled from 'styled-components';

export const Status = styled.span`
  width: 10px;
  border-radius: 50%;
  height: 10px;
  margin-right: 30px;
  background-color: ${props => {
    if (props.status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Avatar = styled.img`
  margin-right: 30px;
  border-radius: 5%;
  overflow: hidden;
  border: 1px solid rgba(92, 91, 91, 0.555);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
