import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
`;

export const Info = styled.figcaption`
  width: 100%;
  padding: 10px 6px;
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
  min-height: 340px;
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

    ${Info} {
      color: #c4dd52;
    }
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  font-size: inherit;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InfoListItem = styled.li`
  font-size: inherit;
`;