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

    aside {
      display: flex;

      .editButton {
        height: 40px;
        width: 116px;
        background: #4dbaf9;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        padding: 0 18px 0 18px;
        margin-left: 10px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        &:hover {
          background: ${darken(0.05, '#4dbaf9')};
        }
      }

      .cancelButton {
        height: 40px;
        width: 138px;
        background: #f94d6a;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        padding: 0 18px 0 18px;
        margin-left: 10px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        &:hover {
          background: ${darken(0.05, '#f94d6a')};
        }
      }
    }
  }

  img {
    width: 900px;
    height: 250px;
    border-radius: 4px;
    display: flex;
    align-self: center;
    margin-bottom: 20px;
  }

  footer {
    margin-top: 30px;
    display: flex;
  }
`;

export const Description = styled.strong`
  color: #fff;
  font-size: 18px;
  display: flex;
  text-align: justify;
`;

export const Time = styled.strong`
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 20px;

  strong {
    color: #999;
    font-size: 16;
    margin-left: 10px;
  }
`;

export const Location = styled.strong`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  strong {
    color: #999;
    font-size: 16;
    margin-left: 10px;
  }
`;
