import styled from "styled-components";
import BgError from '@src/assets/images/bg-errors.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 30vw;
  padding: 5vh 2vw;
  background-color: rgba(0 0 0 / 70%);
  border-radius: 10px;
  box-shadow: -1px 5px 20px #000000;
  margin: 30vh auto 30px;
`;

export const Code = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 1.2;
  color: #54aa59;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 48px;
  line-height: 1.2;
  color: #54aa59;
`;

export const Background = styled.div`
  margin: auto;
  background: url(${BgError}) center / cover no-repeat;
  transition: background-image 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &::after {
    content: '';
    background-color: rgba(255 255 255 / 10%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;