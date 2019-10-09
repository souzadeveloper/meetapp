import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      font: 14px 'Roboto', sans-serif;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    > button {
      margin: 5px 0 0;
      height: 44px;
      width: 180px;
      padding: 0 15px 0 15px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
`;
