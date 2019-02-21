import styled from 'styled-components';

export const Root = styled.div`
  background: linear-gradient(#3066b0, #039edd);
  height: 500px;
  overflow: hidden;
`;

export const FinnStart = styled.img.attrs({
  src:
    'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cf/Finn.png/revision/latest?cb=20121022153101',
})`
  width: 174px;
  height: 252px;
  cursor: pointer;
  margin: 150px 50px;
`;

export const FinnEnd = styled.img.attrs({
  src:
    'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest?cb=20120921151658',
})`
  cursor: pointer;
  margin: 150px 50px;
  width: 203px;
  height: 311px;
  float: right;
  z-index: 2;
  position: relative;
`;

export const Sword = styled.img.attrs({
  src:
    'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/a2/Finn_sword.png/revision/latest?cb=20180403082600',
})`
  width: 189px;
  height: 662px;
  transform: scale(0.3) rotate(12deg);
  position: absolute;
  right: -28px;
  top: -214px;
  transition: opacity 500ms;
  z-index: 1;
`;
