import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
`;

export const Title = styled.figcaption`
  width: 100%;
  background-color: rgba(0 0 0 / 70%);
  color: #6bb0c8;
  font-size: 24px;
  text-align: center;
  transition: color 0.3s ease-in-out;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Container = styled.figure`
  margin: 0;
  box-shadow: -1px 5px 20px #6bb0c8;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    box-shadow: -1px 5px 20px #c4dd52;

    ${Image} {
      transform: scale(1.1);
    }

    ${Title} {
      color: #c4dd52;
    }
  }
`;