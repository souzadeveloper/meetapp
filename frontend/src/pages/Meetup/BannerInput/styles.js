import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 250px;
      width: 900px;
      border-radius: 4px;
    }

    div {
      height: 250px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        margin-top: 4px;
        font-size: 16px;
        color: #999;
      }
    }

    input {
      display: none;
    }
  }

  span {
    margin-top: 20px;
  }
`;
