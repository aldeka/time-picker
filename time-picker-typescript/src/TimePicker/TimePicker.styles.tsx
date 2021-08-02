import styled from 'styled-components';

const inputHeight = 32;

export const Picker = styled.form`
  position: relative;
`;

export const TimeInput = styled.input`
  width: 100%;
  height: ${inputHeight}px;
`;

export const TimeList = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: ${inputHeight}px;
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
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;

export const DisplayTime = styled.div`
  margin: 16px 0;
  font-size: 60px;
  font-weight: 700;
  text-align: center;
`;