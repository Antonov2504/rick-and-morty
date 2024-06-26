import styled from "styled-components";
import BgLogin from '@src/assets/images/bg-login.jpg';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
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
  margin: 20vh auto 30px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 48px;
  line-height: 1.2;
  color: #c4dd52;
`;

export const Background = styled.div`
  margin: auto;
  background: url(${BgLogin}) center / cover no-repeat;
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

export const Signup = styled(Link)`
  padding-bottom: 3px;
  border-bottom: 1px solid #54aa59;
  color: #54aa59;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #c4dd52;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  margin: 0;
  color: #6bb0c8;
  font-size: 24px;
  line-height: 1.25;
`;