import styled from 'styled-components';

export const Center = styled.div`
  > * {
    margin: 0 auto;
  }
`;

export const Root = styled.div`
  width: 100px;
  height: 100px;
  background: #fea3aa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const PlayerCard = styled.div``;

export const PlayerImage = styled.img``;

export const PlayerBio = styled.div<{ isExpanded: boolean }>`
  height: ${props => (props.isExpanded ? 'auto' : '0')};
  overflow: hidden;
`;
