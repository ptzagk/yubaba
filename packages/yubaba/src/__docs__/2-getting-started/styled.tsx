import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 300px;
`;

export const Thumbnail = styled.button<{ appearance: 'big' | 'small' }>`
  display: block;
  background-color: #2998f7;
  border: none;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 0 1px 10px rgba(32, 33, 36, 0.25);

  :focus {
    outline: 2px solid #2998f7;
    outline-offset: 5px;
  }

  ${props =>
    props.appearance === 'big'
      ? css`
          width: 100%;
          height: 100%;
          box-shadow: 0 1px 50px rgba(32, 33, 36, 0.25);
        `
      : ''};
`;

export const Banner = styled(Thumbnail)<{ background: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.background};
`;
