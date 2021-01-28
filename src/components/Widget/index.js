import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.header`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.P = styled.p`
  font-family: Lato;
  text-align: justify;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

Widget.Input = styled.input`
  position: relative;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

Widget.Button = styled.button`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  padding: .8rem;
`;

Widget.Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export default Widget;
