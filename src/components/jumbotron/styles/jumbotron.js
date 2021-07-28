import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  z-index: 1;
  /* position: absolute;
  z-index: 1; */
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Video = styled.video`
  position: absolute;
  right: 35px;
  top: 92px;
  height: 55%;
  z-index: -1;
  width: 88%;
  @media (max-width: 1220px) {
    position: absolute;
    right: 35px;
    top: 100px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }

  @media (max-width: 600px) {
    position: absolute;
    right: 30px;
    top: 68px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 768px) {
    position: absolute;
    right: 42px;
    top: 99px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 700px) {
    position: absolute;
    right: 28px;
    top: 63px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 540px) {
    position: absolute;
    right: 30px;
    top: 76px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 414px) {
    position: absolute;
    right: 26px;
    top: 58px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 411px) {
    position: absolute;
    right: 24px;
    top: 57px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 375px) {
    position: absolute;
    right: 23px;
    top: 52px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 360px) {
    position: absolute;
    right: 21px;
    top: 51px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 320px) {
    position: absolute;
    right: 19px;
    top: 45px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
  @media (max-width: 280px) {
    osition: absolute;
    right: 18px;
    top: 40px;
    height: 55%;
    z-index: -1;
    width: 88%;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
export const TV = styled.div`
  position: relative;
  object-fit: contain;
  z-index: 0;
`;
