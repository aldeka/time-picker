import styled from "styled-components";

export const AppBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;

  &.dark {
    background: #222;
    color: white;
  }
`;

export const AppWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 0;
`;