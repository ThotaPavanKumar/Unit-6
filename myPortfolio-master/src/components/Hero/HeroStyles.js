import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const A = styled.a`
    outline: none;
    border: none;
    color: #fff;
    margin-top : 50px;
    text-decoration: none;
    border: 1px solid rgb(211, 220, 230);
    border-radius: 5px 5px 5px 5px;
    padding: 13px 40px;
    &:hover {
        color: #fff;
        background-color: #0556f3;
        border: 1px solid rgb(211, 220, 230);
    }
`;
