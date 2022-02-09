import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  background: transparent;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 70%;
    margin: auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    margin: auto;
  }
`;
export const FormHeading = styled.h1`
  background: -webkit-linear-gradient(#fff, #f40c27);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const TextContainer = styled.div`
  width: 90%;
  padding: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: #ffff;
  border: none;
  background: transparent;
  outline: none;
  height: 200px;
  scroll-behavior: smooth;
  border: 0.5px solid red;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #ffff;
  margin-bottom: 5px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  font-weight: 600;
  color: green;
  border: none;
  background: transparent;
  outline: none;
  height: 30px;
  border-bottom: 2px solid red;
  padding: 10px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;
export const ButtonDiv = styled.div`
  width: 100%;
  
`;
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  width: 90%;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;
