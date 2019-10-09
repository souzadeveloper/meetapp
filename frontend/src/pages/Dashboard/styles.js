import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  header {
    height: 92px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #fff;
      font-size: 32px;
    }

    button {
      height: 40px;
      width: 170px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 0 18px 0 18px;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }

    ul {
      margin-top: 30px;
    }
  }
`;

export const Meetup = styled.li`
  max-width: 900px;
  margin-bottom: 10px;
  height: 62px;
  padding: 30px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #fff;
    font-size: 18px;
  }

  aside {
    display: flex;
    align-items: center;

    strong {
      color: #999;
      font-size: 16px;
      margin-right: 30px;
    }
  }
`;
