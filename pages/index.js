import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Head from 'next/head'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
      <Head >
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>{db.title}</title>
          <meta property="og:image" content={db.bg} key="ogimage" />
        </Head>
      <QuizBackground backgroundImage = {db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>
                Anime Quiz
              </h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Só pergunta boa
              </p>
            </Widget.Content>
          </Widget>
          
          <Widget>
            <Widget.Content>
              <h1>
                  Quizes dos miguxos
                </h1>

                <p>
                  Só quiz do bão
                </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/XandeBarros/nextjs-animequiz"/>
      </QuizBackground>
    </>
  );
} 

// export function Layout({pageTitle = db.title}) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta charSet="utf-8" />
//         <title>Meu ovo</title>
//       </Head>
//     </>
//   )
// }