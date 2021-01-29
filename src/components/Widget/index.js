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
  border-radius: ${({ theme }) => theme.borderRadius};
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem;
  outline: 0;
  color: ${({ theme }) => theme.colors.secondary};
`;

Widget.InputRadio = styled.input`
  position: relative;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem;
  outline: 0;
  color: ${({ theme }) => theme.colors.secondary};
`;

Widget.Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0;

  width: 100%;
  position: relative;
  display: flex;
  
  text-decoration: none;
  align-items: center;
  justify-content: center;

  outline: 0;
  
  margin-top: 2rem;
  font-size: 1rem;
  font-family: Lato;
  font-weight: bold;
  padding: .8rem;

  text-transform: uppercase;

  cursor: pointer;
  transition: .3s;

  &:hover,
  &:focus {
    opacity: .5; 
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Widget.Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: flex;
  justify-content: left;
  align-items: center;
    
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

Widget.AlternativeForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default Widget;
