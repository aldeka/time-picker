import styled from 'styled-components';

const inputHeight = 32;

export const Picker = styled.form`
  position: relative;
`;

export const TimeInput = styled.input`
  width: 100%;
  height: ${inputHeight}px;
  font-size: ${inputHeight - 8}px;
  margin-top: ${inputHeight / 2}px;

  &.dark {
    background: #111;
    color: white;

    &:focus {
      outline: 2px solid #334466;
      outline-offset: 2px;
    }
  }
`;

export const TimeList = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: ${inputHeight * 1.5 + 8}px;
  left: 0;

  background: white;
  border: 1px solid black;
  width: 112px;
  max-height: 300px;
  overflow-y: scroll;

  label {
    display: block;
    padding: 8px;

    &:hover {
      background-color: #f3f3f3;
    }

    &.active {
      background-color: #dcedff;
    }
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  &.dark {
    background: #111;
    border: 1px solid #333;

    label {
      &:hover {
        background-color: #222;
      }
  
      &.active {
        background-color: #334466;
      }
    }
  }
`;

export const DisplayTime = styled.div`
  margin: 16px 0;
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  color: #bb0022;

  &.dark {
    color: white;
  }
`;
